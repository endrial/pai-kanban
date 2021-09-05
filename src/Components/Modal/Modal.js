import React from "react";
import "./modal.scss";
import { PlusIcon } from "@primer/octicons-react";

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      tags: "Research",
      asignee: "",
      start: "",
      end: "",
    };
    this.initial = this.state;
  }

  handleChange = (event) => {
    const value = event.target.value;
    const formId = event.target.name;
    this.setState({
      ...this.state,
      [formId]: value,
    });
  };

  render() {
    return (
      <div className="col align-items-center">
        <div className="row justify-content-end">
          <button
            className="add-task rounded-pill p-2"
            data-toggle="modal"
            data-target={"#addTaskModal-" + this.props.columnId}
          >
            <span>
              <PlusIcon size={12} className="octicon" />
            </span>
            <span className="align-text-bottom">Add Task</span>
          </button>
        </div>

        <div
          className="modal fade"
          id={"addTaskModal-" + this.props.columnId}
          tabIndex="-1"
          role="dialog"
          aria-labelledby={"addTaskModal-" + this.props.columnId}
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-sm"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title" id="taskModal">
                  New Task
                </h5>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label className="form-label" htmlFor="title">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="title"
                      id={"title-" + this.props.columnId}
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="tags">
                      Tags
                    </label>
                    <select
                      className="form-control form-control-sm"
                      name="tags"
                      id={"tags-" + this.props.columnId}
                      value={this.state.tags}
                      onChange={this.handleChange}
                    >
                      <option>Research</option>
                      <option>Backend</option>
                      <option>Design</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="asignee">
                      Asignee
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="asignee"
                      id={"asignee-" + this.props.columnId}
                      value={this.state.asignee}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="start">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="form-control form-control-sm"
                      name="start"
                      id={"start-" + this.props.columnId}
                      value={this.state.start}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="end">
                      End Date
                    </label>
                    <input
                      type="date"
                      className="form-control form-control-sm"
                      name="end"
                      id={"end-" + this.props.columnId}
                      value={this.state.end}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => {
                        this.props.addTaskHandler(
                          this.state,
                          this.props.columnId
                        );
                        setTimeout(() => {
                          this.setState(this.initial);
                        }, 0.1);
                      }}
                      className="btn btn-primary"
                      data-dismiss="modal"
                    >
                      Add Task
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
