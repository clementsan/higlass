import React from 'react';

import ContextMenuContainer from './ContextMenuContainer';
import ContextMenuItem from './ContextMenuItem';

// Styles
import '../styles/ContextMenu.scss';

export class NestedContextMenu extends ContextMenuContainer {
  getSubmenu() {
    if (this.state.submenuShown) {
      // the bounding box of the element which initiated the subMenu
      // necessary so that we can position the submenu next to the initiating
      // element
      const bbox = this.state.submenuSourceBbox;
      let position = this.state.orientation === 'left' ? (
        {
          left: this.state.left,
          top: bbox.top
        }
      ) : (
        {
          left: this.state.left + bbox.width + 7,
          top: bbox.top
        }
      );

      const menuItem = this.state.submenuShown;

      return (
        <NestedContextMenu
          menuItems={menuItem.children}
          orientation={this.state.orientation}
          parentBbox={bbox}
          position={position}
        />
      );
    } else {
      return (<div />);
    }
  }

  render() {
    let menuItems = [];

    // iterate over the list
    for (let menuItemKey in this.props.menuItems) {
      let menuItem = this.props.menuItems[menuItemKey];

      menuItems.push(
        <ContextMenuItem
          key={menuItemKey}
          onClick={menuItem.handler ? menuItem.handler : () => null}
          onMouseEnter={menuItem.children ? e => this.handleItemMouseEnter(e, menuItem) : this.handleOtherMouseEnter.bind(this)}
          onMouseLeave={this.handleMouseLeave}
        >
          {menuItem.name}
          {menuItem.children &&
            <svg
              styleName="play-icon"
            >
              <use xlinkHref="#play"></use>
            </svg>
          }
        </ContextMenuItem>
      );
    }

    return(
      <div
        ref={c => this.div = c}
        style={{
          left: this.state.left,
          top: this.state.top
        }}
        styleName="context-menu"
      >
        {menuItems}
        {this.getSubmenu()}
      </div>
    );
  }
}

export default NestedContextMenu;