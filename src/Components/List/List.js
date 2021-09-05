import React from "react";
import "./list.scss";
import { Task } from "../../Components/Task/Task";
import { Droppable } from "react-beautiful-dnd";
import { Modal } from "../../Components/Modal/Modal";

export class List extends React.Component {
  render() {
    return (
      <div className="col-xl-4 mb-2">
        <div className="card">
          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="col-auto h4">{this.props.column.title}</div>
                <Modal
                  columnId={this.props.column.id}
                  addTaskHandler={this.props.addTaskHandler}
                />
              </div>
            </div>
            <Droppable droppableId={this.props.column.id}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {this.props.tasks.map((task, index) => {
                    if (task !== undefined) {
                      return <Task key={task.id} task={task} index={index} />;
                    } else {
                      return null;
                    }
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </div>
    );
  }
}
