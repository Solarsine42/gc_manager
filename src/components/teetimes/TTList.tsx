import React from "react";
import { connect } from "react-redux";
import Teetime from "./Teetime";
import { InputGroup, FormControl, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

interface TLProps {
  [key: string]: any;
}

interface TLStateTypes {
  query: string;
}

class TTList extends React.Component<TLProps, TLStateTypes> {
  state = {
    query: ""
  };

  handleSort = (e: any) => {
    this.setState({ query: e.target.value });
  };

  render() {
    const listOfTeetimes = this.props.teetimes
      .filter((teetimes: any) =>
        teetimes.time.toLowerCase().includes(this.state.query.toLowerCase())
      )
      .map((teetime: any, i: number) => <Teetime key={i} teetime={teetime} />);

    return (
      <Form>
        <InputGroup style={{ width: "70%" }} className="mb-4">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Search by Tee Time..."
            onChange={this.handleSort}
          />
        </InputGroup>
        <div>{listOfTeetimes}</div>
      </Form>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    customers: state.customers.all,
    teetimes: state.teetimes.all
  };
}

export default connect(mapStateToProps)(TTList);
