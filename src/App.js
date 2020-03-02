import React from "react";
import TreeView from "./components/TreeView";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [
        {
          value: "parent",
          label: "Parent",
          children: [
            {
              value: "child1",
              label: "Child 1",
              children: [
                {
                  value: "Child1.1",
                  label: "Child 1.1",
                  children: [
                    {
                      value: "child1.1.1",
                      label: "Child 1.1.1",
                      children: [
                        { value: "Child1.1.1.1", label: "Child 1.1.1.1" },
                        { value: "Child1.2.1.1", label: "Child 1.2.1.1" }
                      ]
                    },
                    { value: "child1.1.2", label: "Child 1.1.2" }
                  ]
                },
                { value: "Child1.2", label: "Child 1.2" }
              ]
            },
            { value: "child2", label: "Child 2" }
          ]
        },
        {
          value: "parent1",
          label: "Parent 1"
        },
        {
          value: "parent2",
          label: "Parent 2",
          children: [
            {
              value: "child2.1",
              label: "Child 2.1",
              children: [
                { value: "Child2.1.1", label: "Child 2.1.1" },
                { value: "Child2.1.2", label: "Child 2.1.2" }
              ]
            },
            { value: "child1.2", label: "Child 1.2" }
          ]
        },
        {
          value: "parent3",
          label: "Parent 3",
          children: [
            { value: "child3.1", label: "Child 3.1" },
            { value: "child3.2", label: "Child 3.2" }
          ]
        }
      ]
    };
  }
  render() {
    const { nodes } = this.state;
    return (
      <div className="App">
        <TreeView nodes={nodes} />
      </div>
    );
  }
}
