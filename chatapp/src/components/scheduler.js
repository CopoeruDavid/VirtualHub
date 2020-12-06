import React, {Component} from 'react';
import {DayPilot, DayPilotScheduler} from "daypilot-pro-react";
import Zoom from "./Zoom";

class Scheduler extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startDate: "2020-12-01",
            days: 31,
            scale: "Day",
            timeHeaders: [
                { groupBy: "Month"},
                { groupBy: "Day", format: "d"}
            ],
            cellWidthSpec: "Auto",
            cellWidth: 50,
            resources: [
                {name: "IT", id: "A"},
                {name: "Finance", id: "B"},
                {name: "Marketing", id: "C"},
                {name: "Resources", id: "D"},
                {name: "Investment", id: "E"},
                {name: "Technology", id: "F"},
                {name: "Banking", id: "G"}
            ],
            events: [
                {id: 1, text: "Introduction to blockchain", start: "2020-12-06T00:00:00", end: "2020-12-08T00:00:00", resource: "A" },
                {id: 2, text: "Machine learning in investment banking", start: "2020-12-09T00:00:00", end: "2020-12-12T00:00:00", resource: "C", barColor: "#38761d", barBackColor: "#93c47d" },
                {id: 3, text: "Finances of art", start: "2020-12-06T00:00:00", end: "2020-12-10T00:00:00", resource: "D", barColor: "#f1c232", barBackColor: "#f1c232" },
                {id: 4, text: "Deep learning innovations in stock trading", start: "2020-12-20T00:00:00", end: "2020-12-23T00:00:00", resource: "E", barColor: "#cc0000", barBackColor: "#ea9999" }
            ]
        };
    }

    zoomChange(args) {
        switch (args.level) {
            case "month":
                this.setState({
                    startDate: DayPilot.Date.today().firstDayOfMonth(),
                    days: DayPilot.Date.today().daysInMonth(),
                    scale: "Day"
                });
                break;
            case "week":
                this.setState({
                    startDate: DayPilot.Date.today().firstDayOfWeek(),
                    days: 7,
                    scale: "Day"
                });
                break;
            default:
                throw new Error("Invalid zoom level");
        }
    }

    cellWidthChange(ev) {
        var checked = ev.target.checked;
        this.setState({
            cellWidthSpec: checked ? "Auto" : "Fixed"
        });
    }

    render() {
        var {...config} = this.state;
        return (
            <div>

                <div className="toolbar">
                    <Zoom onChange={args => this.zoomChange(args)} />
                    <span className="toolbar-item"><label><input type="checkbox" checked={this.state.cellWidthSpec === "Auto"} onChange={ev => this.cellWidthChange(ev)} /> Auto width</label></span>
                </div>

                <DayPilotScheduler
                  {...config}
                  onEventMoved={args => {
                      console.log("Event moved: ", args.e.data.id, args.newStart, args.newEnd, args.newResource);
                      this.scheduler.message("Event moved: " + args.e.data.text);
                  }}
                  onEventResized={args => {
                      console.log("Event resized: ", args.e.data.id, args.newStart, args.newEnd);
                      this.scheduler.message("Event resized: " + args.e.data.text);
                  }}
                  onTimeRangeSelected={args => {
                    DayPilot.Modal.prompt("New event name", "Event").then(modal => {
                      this.scheduler.clearSelection();
                      if (!modal.result) {
                        return;
                      }
                      this.scheduler.events.add({
                        id: DayPilot.guid(),
                        text: modal.result,
                        start: args.start,
                        end: args.end,
                        resource: args.resource
                      });
                    });
                  }}
                  ref={component => { this.scheduler = component && component.control; }}
                />
            </div>
        );
    }
}

export default Scheduler;