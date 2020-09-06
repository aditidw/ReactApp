import React, { Component } from "react";

export default class UpcomingEvents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      event: null,
      eventTypes: ["top_level_event", "generic"],
      tabledata: []
    };
  }

  async componentDidMount() {
    fetch("http://localhost:4005/events", { method: 'GET' })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          event: data.events, loading: false
        })

      })
      .catch(console.log)
  }

  async setselectedValue(selectedValue) {
    const url = "http://localhost:4005/events/?state=upcoming&type=" + selectedValue;
    const response = await fetch(url);
    const data = await response.json();
    console.log("Res:", data.events);
    this.setState({
      tabledata: data.events
    })
    console.log(this.state.tabledata);
    this.LoadTable();
  }

  LoadTable() {
    return (
      <table className="align-items-center table-bordered" style={{
        border: "1px solid black", backgroundColor: "#fff",
        borderCollapse: "collapse",
        borderRadius: "6px",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "auto",
      }
      }>
        <thead className="thead-dark">
          <tr>
            <th style={{ border: "1px solid black", textAlign: "center", }}>Bettable</th>
            <th style={{ border: "1px solid black", textAlign: "center", }}>Chart Time Period</th>
            <th style={{ border: "1px solid black", textAlign: "center", }}>Created</th>
            <th style={{ border: "1px solid black", textAlign: "center", }}>Description</th>
            <th style={{ border: "1px solid black", textAlign: "center" }}>Display Order</th>
            <th style={{ border: "1px solid black", textAlign: "center", }}>End Date</th>
            <th style={{ border: "1px solid black", textAlign: "center", }}>Full Slug</th>
            <th style={{ border: "1px solid black", textAlign: "center", }}>Hidden</th>
            <th style={{ border: "1px solid black", textAlign: "center", }}>Id</th>
            <th style={{ border: "1px solid black", textAlign: "center", }}>Inplay Enabled</th>
            <th style={{ border: "1px solid black", textAlign: "center", }}>Modified</th>
            <th style={{ border: "1px solid black", textAlign: "center", }}>Name</th>
            <th style={{ border: "1px solid black", textAlign: "center", }}>Parent Id</th>
            <th style={{ border: "1px solid black", textAlign: "center", }}>Seo Description</th>
            <th style={{ border: "1px solid black", textAlign: "center", }}>Short Name</th>
            <th style={{ border: "1px solid black", textAlign: "center", }}>Slug</th>
            <th style={{ border: "1px solid black", textAlign: "center", }}>Special Rules</th>
            <th style={{ border: "1px solid black", textAlign: "center", }}>Start Date</th>
            <th style={{ border: "1px solid black", textAlign: "center", }}>Start Datetime</th>
            <th style={{ border: "1px solid black", textAlign: "center", }}>State</th>
            <th style={{ border: "1px solid black", textAlign: "center", }}>Type</th>
          </tr>
        </thead>
        {
          this.state.tabledata.map((result) => (
            <tbody key={result.id}>
              <tr>
                <td style={{ border: "1px solid black", textAlign: "center", width: "30%", }}>{result.bettable === false ? 'False' : 'True'}</td>
                <td style={{ border: "1px solid black", textAlign: "center", width: "40%", }}>{result.chart_time_period === null ? 'NA' : result.chart_time_period}</td>
                <td style={{ border: "1px solid black", textAlign: "center", }}>{new Intl.DateTimeFormat("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  month: "2-digit",
                  day: "2-digit",
                  year: "2-digit"
                }).format(new Date(result.created))}</td>
                <td style={{ border: "1px solid black", textAlign: "center", }}>{result.description !== null && result.description !== "" ? result.description : 'NA'}</td>
                <td style={{ border: "1px solid black", textAlign: "center", }}>{result.display_order}</td>
                <td style={{ border: "1px solid black", textAlign: "center", }}>{result.end_date !== null && result.end_date !== "" ? result.end_date : 'NA'}</td>
                <td style={{ border: "1px solid black", textAlign: "center", }}>{result.full_slug}</td>
                <td style={{ border: "1px solid black", textAlign: "center", }}>{result.hidden === false ? 'False' : 'True'}</td>
                <td style={{ border: "1px solid black", textAlign: "center", }}>{result.id}</td>
                <td style={{ border: "1px solid black", textAlign: "center", }}>{result.inplay_enabled === false ? 'False' : 'True'}</td>
                <td style={{ border: "1px solid black", textAlign: "center", }}>{new Intl.DateTimeFormat("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  month: "2-digit",
                  day: "2-digit",
                  year: "2-digit"
                }).format(new Date(result.modified))}</td>
                <td style={{ border: "1px solid black", textAlign: "center", }}>{result.name}</td>
                <td style={{ border: "1px solid black", textAlign: "center", }}>{result.parent_id !== null && result.end_date !== "" ? result.parent_id : 'NA'}</td>
                <td style={{ border: "1px solid black", textAlign: "center", }}>{result.seo_description !== null && result.seo_description !== "" ? result.seo_description : 'NA'}</td>
                <td style={{ border: "1px solid black", textAlign: "center", }}>{result.short_name !== null && result.short_name !== "" ? result.short_name : 'NA'}</td>
                <td style={{ border: "1px solid black", textAlign: "center", }}>{result.slug}</td>
                <td style={{ border: "1px solid black", textAlign: "center", }}>{result.special_rules !== null && result.special_rules !== "" ? result.special_rules : 'NA'}</td>
                <td style={{ border: "1px solid black", textAlign: "center", }}>{result.start_date}</td>
                <td style={{ border: "1px solid black", textAlign: "center", }}>{new Intl.DateTimeFormat("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  month: "2-digit",
                  day: "2-digit",
                  year: "2-digit"
                }).format(new Date(result.start_datetime))}</td>
                <td style={{ border: "1px solid black", textAlign: "center", }}>{result.state === 'upcoming' ? 'Upcoming' : ''}</td>
                <td style={{ border: "1px solid black", textAlign: "center", }}>{result.type === 'top_level_event' ? 'Top Level Event' : 'Generic'}</td>
              </tr>
            </tbody>
          ))
        }
      </table >
    );
  }

  render() {
    return (
      <div>
        <h1>Upcoming Events</h1>
        {this.state.loading || !this.state.event ?
          <span>...loading</span> :
          <div>
            <form>
              <div class="form-group col-auto my-1" style={{ padding: "25px", }}>
                <select className="mdb-select form-control" onChange={(e) => this.setselectedValue(e.target.value)} style={{}}>
                  <option>Select an Event</option>
                  {
                    this.state.event &&
                    this.state.eventTypes.map((h, i) =>
                      (<option key={i} value={h}>{h}</option>))
                  }
                </select>
              </div>
            </form>
          </div>}
        <div style={{ padding: "0px 25px 25px 25px", }}>
          {this.LoadTable()}
        </div>
      </div>
    );
  }
}

