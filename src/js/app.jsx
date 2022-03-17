import React from 'react';

// MonthlyPayment = principle * ( rate(1+r)^n / (1+r)^n - 1);
// why 100??????????????????????????

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      payment: null
    };
  }

  handleClick  (e) {
    e.preventDefault();
    let balance = document.getElementById('balance').value;
    let rate    = document.getElementById('rate').value / 100 / 12;
    let term    = document.getElementById('term').value;

    let n = term * 12;

    let top = rate * Math.pow((1+rate), n);
    let down= Math.pow((1+rate), n) - 1;

    let result = balance * (top/down);

    this.setState( state => {
      return { payment: result }
    });
  }

  render() {
    return (
      <div className='container'>
        
        <form className="form-horizontal" onSubmit={this.handleClick.bind(this) }>

          <h3>Mortgage Calculator</h3>

          <div className="form-group">
            <label htmlFor="balance" className="loanBalance control-label col-sm-2">
              Loan Balance
            </label>
              <div className="col-sm-10">
                <input id="balance" type="text" className="form-control" 
                name="balance" placeholder="0"/>
              </div>
          </div>

          <div className="form-group">
            <label htmlFor="rate" className="i-rate control-label col-sm-2">
              Interest Rate (%)
            </label>
              <div className="col-sm-10">
                <input id="rate" type="text" className="form-control" 
                name="rate" placeholder="0"/>
              </div>
          </div>

          { /* term should be select */}
          <div className="form-group">
            <label htmlFor="term" className="loanTerm control-label col-sm-2">
              Loan Term (years)
            </label>
              <div className="col-sm-10">
                <select className="form-select form-select-lg mb-3" 
                id="term" name="term">
                  <option defaultValue value={15} >15</option>
                  <option value={30}>30</option>
                </select>
              </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-primary" name="submit">
                Calculate
              </button>
            </div>
          </div>

        </form>

        <div className="mortgage-payment" id="output">
          { this.state.payment ? this.state.payment.toFixed(2) : '' }
        </div>
      </div>
    );
  }
}
