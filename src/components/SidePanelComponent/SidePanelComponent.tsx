import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BaseWebComponent } from '../../models/BaseWebComponent';
import { Panel, PanelType, Link } from "office-ui-fabric-react";
import styles from './SidePanelComponent.module.scss';

export interface ISidePanelComponentProps {

    /**
     * Title of the pop out panel
     */
    title?:string;

    /**
     * The URL to the view form
     */
    viewformurl?: string;

    /**
     * The size of the panel
     */
    size?:string;

    /**
     * The position of the panel
     */
    position?:string;

}

export interface ISidePanelComponentState {
    showPanel: boolean;
}

export interface ISidePanelComponentTypeSize {
    Type: PanelType;
    Size: string;
}

export class SidePanelComponent extends React.Component<ISidePanelComponentProps, ISidePanelComponentState> {
    
    constructor(props: ISidePanelComponentProps) {
        super(props);
        this.state = {
            showPanel: false
        };
    }

    public render() {

        const panelTypeSize = this.getPanelTypeSize();

        return <div className={styles.sidePanelLink}>
            <span onClick={(e) => {
                this.setState({ showPanel: true });
            }}>{this.props.title}</span>
            
            <Panel
                headerText={this.props.title}
                isOpen={this.state.showPanel}
                type={panelTypeSize.Type}
                isLightDismiss={true}
                customWidth={panelTypeSize.Size}
                onDismiss={() => {
                    this.setState({
                        showPanel: false
                    });
                }}
                className={styles.sidePanelComponent}
                closeButtonAriaLabel="Close"
            >
                <iframe width="100%" src={this.props.viewformurl}></iframe>

            </Panel>
        </div>;
    }

    private getPanelTypeSize(): ISidePanelComponentTypeSize {

        let panelType : PanelType = null;
        let size: string = null;

        switch (this.props.size) {
            case "custom": {
                panelType = PanelType.custom;
                size = this.props.size;
                break;
            } 
            case "customNear" : {
                panelType = PanelType.customNear;
                size = this.props.size;
                break;
            }
            case "extraLarge": {
                panelType = PanelType.extraLarge;
                break;
            }
            case "large": {
                panelType = PanelType.large;
                break;
            }
            case "largeFixed" : {
                panelType = PanelType.largeFixed;
                break;
            }
            case "medium" : {
                panelType = PanelType.medium;
                break;
            }
            case "smallFixedFar" : {
                panelType = PanelType.smallFixedFar;
                break;
            }
            case "smallFixedNear":{
                panelType = PanelType.smallFixedNear;
                break;
            }
            case "smallFluid" : {
                panelType = PanelType.smallFluid;
                break;
            }
            default: {
                panelType = PanelType.medium;
                break;
            }
        }
        
        return {
            Type : panelType,
            Size: size
        };

    }
}

export class SidePanelComponentWebComponent extends BaseWebComponent {
   
    public constructor() {
        super(); 
    }
 
    public async connectedCallback() {
        
       let props = this.resolveAttributes();

       // You can use this._ctx here to access current Web Part context
       const customComponent = <SidePanelComponent {...props}/>;
       ReactDOM.render(customComponent, this);
    }    
}