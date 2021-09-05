import "./App.scss";
import "./main.scss";
import React from "react";
import { dataTasks } from "./dataTask";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { List } from "./Components/List/List";
import { DragDropContext } from "react-beautiful-dnd";

class App extends React.Component {
  state = dataTasks;

  makeid = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  addTask = (data, columnId) => {
    console.log(columnId);

    const newTaskId = this.makeid(5);

    const column = this.state.columns[columnId];

    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.push(newTaskId);

    const newTask = {
      id: newTaskId,
      title: data.title,
      tags: data.tags,
      asignee: data.asignee,
      start_date: data.start,
      end_date: data.end,
    };

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newState = {
      ...this.state,
      tasks: {
        ...this.state.tasks,
        [newTaskId]: newTask,
      },
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };
    console.log(newState);
    this.setState(newState);
  };

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);

      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);

    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <Sidebar />
        <div className="container-fluid main">
          <div className="container d-lg-block d-xl-flex">
            <DragDropContext onDragEnd={this.onDragEnd}>
              {this.state.columnOrder.map((columnId) => {
                const column = this.state.columns[columnId];
                const tasks = column.taskIds.map(
                  (taskId) => this.state.tasks[taskId]
                );
                return (
                  <List
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    addTaskHandler={this.addTask}
                  />
                );
              })}
            </DragDropContext>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
