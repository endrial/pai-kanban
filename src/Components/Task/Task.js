import React from "react";
import "./task.scss";
import { Draggable } from "react-beautiful-dnd";

export class Task extends React.Component {
  getDaysAgo = (start_date) => {
    var created_date = new Date(start_date);
    var today = new Date();
    var days_passed = Math.floor(
      (today.getTime() - created_date.getTime()) / (1000 * 3600 * 24)
    );
    return days_passed > 0 ? days_passed + " days ago" : "today";
  };

  getTagname = (tag) => {
    tag = tag.toLowerCase(tag);
    switch (tag) {
      case "research":
        return "A";
      case "backend":
        return "B";
      case "design":
        return "C";
      default:
        return "D";
    }
  };

  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className="container-fluid task-card py-3 my-2">
              <div className="container">
                <div className="row">
                  <div className="col h6">{this.props.task.title}</div>
                </div>
                <div className="row">
                  <div className="col-auto">
                    <div className="text-center tags">
                      {this.getTagname(this.props.task.tags)}
                    </div>
                  </div>
                  <div className="px-0 col-auto">
                    <div
                      className={
                        "text-center tagname " +
                        this.props.task.tags.toLowerCase()
                      }
                    >
                      <div className="container">
                        {this.props.task.tags.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="days w-100">
                      {this.getDaysAgo(this.props.task.start_date)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}
