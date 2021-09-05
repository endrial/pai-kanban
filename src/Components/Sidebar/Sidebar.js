import React from "react";
import "./sidebar.scss";
import {
  SearchIcon,
  KebabHorizontalIcon,
  PlusIcon,
} from "@primer/octicons-react";
import { dataTeams } from "../../dataTask";

export class Sidebar extends React.Component {
  teamsData = dataTeams;

  handleButton = (e) => {
    console.log(e.target.id);
  };

  render() {
    return (
      <div className="sidenav text-white">
        <Search />
        <Profile />
        <div className="container px-4">
          <div className="menu-dark">Menu</div>
          <div className="col">
            <div className="row link">Home</div>
            <div className="row link">My Tasks</div>
            <div className="row link">
              Notifications <span className="notif-count rounded-pill">3</span>{" "}
            </div>
          </div>
        </div>

        <div className="container px-4">
          <div className="menu-dark">Teams</div>
          <div className="col">
            {this.teamsData.teams.map((teamId, idx) => {
              const team = this.teamsData.team[teamId];
              return (
                <div key={idx} className="row">
                  <div className="col-auto link px-0">{team.name}</div>
                  <div className="col">
                    <div className="row h-100 justify-content-end align-items-center">
                      <img
                        src="https://picsum.photos/10"
                        alt="profpic"
                        className="mx-1 member rounded-circle"
                      />
                      <img
                        src="https://picsum.photos/11"
                        alt="profpic"
                        className="mx-1 member rounded-circle"
                      />
                      <img
                        src="https://picsum.photos/12"
                        alt="profpic"
                        className="mx-1 member rounded-circle"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="row">
              <button
                id="add-task-button"
                className="add-team py-2 px-0"
                onClick={this.handleButton}
              >
                <span>
                  <PlusIcon size={12} className="octicon" />
                </span>
                <span className="button-info px-1 align-text-bottom">
                  Add Team
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function Search() {
  return (
    <div className="container d-flex py-2">
      <span className="search p-3 col">
        <input type="text" className="search" placeholder="Search" />
      </span>
      <span className="col-auto d-block m-auto">
        <SearchIcon size={20} />
      </span>
    </div>
  );
}

function Profile() {
  var imageLink = "https://picsum.photos/20";
  return (
    <div className="container profile py-2 px-4">
      <div className="row">
        <div className="col-auto">
          <img
            src={imageLink}
            className="rounded-circle pic"
            alt="profile-pic"
          />
        </div>
        <div className="col px-3">
          <div className="row name">EM Putra</div>
          <div className="row role">Frontend Developer</div>
        </div>
        <div className="col-auto d-block m-auto">
          <KebabHorizontalIcon size={20} />
        </div>
      </div>

      <div className="d-flex task my-2">
        <div className="col-6">
          <div className="row task-number">372</div>
          <div className="row task-info">Completed Tasks</div>
        </div>
        <div className="col-6">
          <div className="row task-number">11</div>
          <div className="row task-info">Open Tasks</div>
        </div>
      </div>
    </div>
  );
}
