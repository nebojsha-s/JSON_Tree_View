import React from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faSquare,
  faChevronRight,
  faChevronDown,
  faPlusSquare,
  faMinusSquare,
  faFolder,
  faFolderOpen,
  faFile
} from "@fortawesome/free-solid-svg-icons";

export default class TreeView extends React.Component {
  expandableItems = 0;
  constructor(props) {
    super(props);
    this.state = {
      expanded: [],
      expandableItems: 0
    };
  }

  componentDidMount() {
    this.countExpandableItems(this.props.nodes);
  }

  countExpandableItems = treeData => {
    treeData.map(item => {
      if (item.hasOwnProperty("children")) {
        this.expandableItems = this.expandableItems + 1;
        return this.countExpandableItems(item.children);
      } else {
        return true;
      }
    });
    this.setState({
      expandableItems: this.expandableItems
    });
  };

  render() {
    const { nodes } = this.props;
    const { expanded, expandableItems } = this.state;
    return (
      <CheckboxTree
        nodes={nodes}
        showExpandAll={true}
        expanded={expanded}
        onExpand={expanded => this.setState({ expanded })}
        showNodeIcon={false}
        icons={{
          check: (
            <FontAwesomeIcon
              className="rct-icon rct-icon-check"
              icon={faCheckSquare}
            />
          ),
          uncheck: (
            <FontAwesomeIcon
              className="rct-icon rct-icon-uncheck"
              icon={faSquare}
            />
          ),
          halfCheck: (
            <FontAwesomeIcon
              className="rct-icon rct-icon-half-check"
              icon={faCheckSquare}
            />
          ),
          expandClose: (
            <FontAwesomeIcon
              className="rct-icon rct-icon-expand-close"
              icon={faChevronRight}
            />
          ),
          expandOpen: (
            <FontAwesomeIcon
              className="rct-icon rct-icon-expand-open"
              icon={faChevronDown}
            />
          ),
          expandAll:
            expandableItems > expanded.length ? (
              <FontAwesomeIcon
                className="rct-icon rct-icon-expand-all"
                icon={faPlusSquare}
              />
            ) : (
              <span className="hide-el" />
            ),
          collapseAll:
            expandableItems > 0 ? (
              expandableItems === expanded.length ? (
                <FontAwesomeIcon
                  className="rct-icon rct-icon-collapse-all"
                  icon={faMinusSquare}
                />
              ) : (
                <span className="hide-el" />
              )
            ) : (
              <span className="hide-el" />
            ),
          parentClose: (
            <FontAwesomeIcon
              className="rct-icon rct-icon-parent-close"
              icon={faFolder}
            />
          ),
          parentOpen: (
            <FontAwesomeIcon
              className="rct-icon rct-icon-parent-open"
              icon={faFolderOpen}
            />
          ),
          leaf: (
            <FontAwesomeIcon
              className="rct-icon rct-icon-leaf-close"
              icon={faFile}
            />
          )
        }}
      />
    );
  }
}
