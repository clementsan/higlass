import { TiledPixiTrack } from './TiledPixiTrack';

// Services
import { tileProxy } from './services';

// Utils
import { colorToHex } from './utils';

export class ArrowheadDomainsTrack extends TiledPixiTrack {
  constructor(scene, dataConfig, handleTilesetInfoReceived, option, animate) {
    super(scene, dataConfig, handleTilesetInfoReceived, option, animate);

    this.drawnRects = {};
  }

  tileToLocalId(tile) {
    /*
         * The local tile identifier
         */

    // tile contains [zoomLevel, xPos, yPos]
    return `${tile.join('.')}`;
  }

  tileToRemoteId(tile) {
    /**
         * The tile identifier used on the server
         */

    // tile contains [zoomLevel, xPos, yPos]
    return `${tile.join('.')}`;
  }

  localToRemoteId(remoteId) {
    const idParts = remoteId.split('.');
    return idParts.slice(0, idParts.length - 1).join('.');
  }

  calculateZoomLevel() {
    const xZoomLevel = tileProxy.calculateZoomLevel(this._xScale,
      this.tilesetInfo.min_pos[0],
      this.tilesetInfo.max_pos[0]);
    const yZoomLevel = tileProxy.calculateZoomLevel(this._xScale,
      this.tilesetInfo.min_pos[1],
      this.tilesetInfo.max_pos[1]);

    let zoomLevel = Math.max(xZoomLevel, yZoomLevel);
    zoomLevel = Math.min(zoomLevel, this.maxZoom);

    return zoomLevel;
  }

  setVisibleTiles(tilePositions) {
    /**
         * Set which tiles are visible right now.
         *
         * @param tiles: A set of tiles which will be considered the currently visible
         * tile positions.
         */
    this.visibleTiles = tilePositions.map(x => ({
      tileId: this.tileToLocalId(x),
      remoteId: this.tileToRemoteId(x),
    }));

    this.visibleTileIds = new Set(this.visibleTiles.map(x => x.tileId));
  }

  calculateVisibleTiles(mirrorTiles = true) {
    // if we don't know anything about this dataset, no point
    // in trying to get tiles
    if (!this.tilesetInfo) { return; }

    this.zoomLevel = this.calculateZoomLevel();
    // this.zoomLevel = 0;

    this.xTiles = tileProxy.calculateTiles(this.zoomLevel, this._xScale,
      this.tilesetInfo.min_pos[0],
      this.tilesetInfo.max_pos[0],
      this.tilesetInfo.max_zoom,
      this.tilesetInfo.max_width);

    this.yTiles = tileProxy.calculateTiles(this.zoomLevel, this._yScale,
      this.tilesetInfo.min_pos[1],
      this.tilesetInfo.max_pos[1],
      this.tilesetInfo.max_zoom,
      this.tilesetInfo.max_width);

    const rows = this.xTiles;
    const cols = this.yTiles;
    const zoomLevel = this.zoomLevel;

    // if we're mirroring tiles, then we only need tiles along the diagonal
    const tiles = [];

    // calculate the ids of the tiles that should be visible
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < cols.length; j++) {
        const newTile = [zoomLevel, rows[i], cols[j]];

        tiles.push(newTile);
      }
    }

    //
    this.setVisibleTiles(tiles);
  }


  initTile(tile) {
    /**
         * Create whatever is needed to draw this tile.
         */

    // this.drawTile(tile);
  }

  destroyTile(tile, graphics) {

  }

  draw() {
    this.drawnRects = {};

    super.draw();
  }

  drawTile(tile) {
    if (!tile.graphics) { return; }

    // console.log('tile:', tile);
    // console.log('Id2DTiled drawTile...');
    const graphics = tile.graphics;
    graphics.clear();

    const stroke = colorToHex(this.options.rectangleDomainStrokeColor || 'black');
    const fill = colorToHex(this.options.rectangleDomainFillColor || 'grey');

    graphics.lineStyle(
      typeof this.options.rectangleDomainStrokeWidth !== 'undefined'
        ? this.options.rectangleDomainStrokeWidth
        : 1,
      stroke,
      typeof this.options.rectangleDomainStrokeOpacity !== 'undefined'
        ? this.options.rectangleDomainStrokeOpacity
        : 1,
    );
    graphics.beginFill(
      fill,
      typeof this.options.rectangleDomainFillOpacity !== 'undefined'
        ? this.options.rectangleDomainFillOpacity
        : 0.4,
    );

    graphics.alpha = this.options.rectangleDomainOpacity || 0.5;

    if (!tile.tileData.length)
      return;

    // line needs to be scaled down so that it doesn't become huge
    for (const td of tile.tileData) {
      const line = td.fields;

      const startX = this._xScale(td.xStart);
      const endX = this._xScale(td.xEnd);

      const startY = this._yScale(td.yStart);
      const endY = this._yScale(td.yEnd);

      const uid = td.uid;

      const width = endX - startX;
      const height = endY - startY;

      if (uid in this.drawnRects) { continue; } // we've already drawn this rectangle in another tile


      let drawnRect = { x: startX, y: startY, width: endY - startY, height: endX - startX };

      if (this.options.minSquareSize && this.options.minSquareSize != 'none') {
        if (width < +this.options.minSquareSize || height < +this.options.minSquareSize) {
          const newWidth = this.options.minSquareSize;
          const newHeight = this.options.minSquareSize;
          
          drawnRect = {x: (startX + endX) / 2, y: (startY + endY) / 2,
            width: newWidth, height: newHeight};
        }
      } 

      this.drawnRects[uid] = drawnRect;

      graphics.drawRect(drawnRect.x, drawnRect.y, drawnRect.width, drawnRect.height);
    }
  }

  exportSVG() {
    let track = null,
      base = null;

    if (super.exportSVG) {
      [base, track] = super.exportSVG();
    } else {
      base = document.createElement('g');
      track = base;
    }
    const output = document.createElement('g');
    output.setAttribute('transform',
      `translate(${this.position[0]},${this.position[1]})`);

    track.appendChild(output);

    for (let tile of this.visibleAndFetchedTiles()) {
      if (!tile.tileData || !tile.tileData.length)
        // this tile has no data
        continue;

      tile.tileData.forEach((td, i) => {
        let gTile = document.createElement('g')
        gTile.setAttribute('transform',
          `translate(${tile.graphics.position.x},${tile.graphics.position.y})scale(${tile.graphics.scale.x},${tile.graphics.scale.y})`);
        output.appendChild(gTile);

        if (td.uid in this.drawnRects) {
          let rect = this.drawnRects[td.uid];

          let r = document.createElement('rect');
          r.setAttribute('x', rect.x);
          r.setAttribute('y', rect.y);
          r.setAttribute('width', rect.width);
          r.setAttribute('height', rect.height);

          r.setAttribute('fill',  this.options.fillColor ? this.options.fillColor : 'grey')
          r.setAttribute('opacity', 0.3);

          r.style.stroke = this.options.fillColor ? this.options.fillColor : 'grey';
          r.style.strokeWidth = "1px";

          gTile.appendChild(r);
        }
      });
    }

    return [base, base];
  }

  setPosition(newPosition) {
    super.setPosition(newPosition);

    this.pMain.position.y = this.position[1];
    this.pMain.position.x = this.position[0];
  }

  zoomed(newXScale, newYScale) {
    this.xScale(newXScale);
    this.yScale(newYScale);

    this.refreshTiles();

    this.draw();
  }
}

export default ArrowheadDomainsTrack;
