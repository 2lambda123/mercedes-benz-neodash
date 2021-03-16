import Modal from "react-materialize/lib/Modal";
import React from "react";
import Button from "react-materialize/lib/Button";
import Textarea from "react-materialize/lib/Textarea";
import NeoModal from "./NeoModal";

/**
 * A modal component used for saving/loading dashboards.
 * The content of the modal is a large multi-line textbox for specifying a dashboard file as JSON.
 */
class NeoSaveLoadModal extends NeoModal {
    constructor(props) {
        super(props);
    }

    /**
     * Draws the modal, creating a textbox defaulting to the current active dashboard state.
     */
    render() {
        return (
            <NeoModal header={"🖨 Load/Export Dashboard as JSON"}
                      root={document.getElementById("root")}
                      json={this.props.json}
                      placeholder={"Paste a dashboard JSON file here..."}
                      actions={[
                          <Button style={{position: 'absolute', right: '20px', top: '20px'}} modal="close"
                                  node="button"
                                  onClick={this.props.loadJson}
                                  waves="green">Save</Button>
                      ]}
                      trigger={
                          this.props.trigger
                      }
                      componentDidUpdate={this.props.update}
                      stateChanged={this.props.stateChanged}
                      content={<Textarea style={{minHeight: '500px'}} id="Textarea-12" l={12} m={12} s={12} xl={12}
                                         onChange={this.props.change} value={this.props.value}
                                         placeholder={this.props.placeholder}/>}
            />
        )
    }


}

export default (NeoSaveLoadModal);