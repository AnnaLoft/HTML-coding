import React, {Component} from "react";
import {CSVLink} from "react-csv";

class AsyncCSV extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
        this.csvLinkEl = React.createRef();
        this.headers = [
           {label: 'Name', key: 'name'},
           {label: 'Symbol', key: 'symbol'},
           {label: 'Marketcap', key: 'market_cap'},
           {label: 'Current price', key: 'current_price'},
           {label: 'Price change Percentage 24h', key: 'price_change_percentage_24h'},
           {label: 'Total Volume', key: 'total_volume'}
        ]
    }

    

    getCurrencyList = () => {
        return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res => res.json())
    }

    downloadReport = async () => {
        const data = await this.getCurrencyList();
        this.setState({data: data}, () => {
            setTimeout(() => {
                this.csvLinkEl.current.link.click();

            });
        });
    }
    render() {
        const {data} = this.state;

        return <div className="button-container">
        <button  className="coin-refresh"
            type ="button"
            value="export to CSV"
            onClick={this.downloadReport}>Download Report</button>
        <CSVLink 
        headers={this.CSVLink}
        data={data}
        filename="Report.csv"
        ref ={this.csvLinkEl}
        />
        </div>

    }

}

export default AsyncCSV;