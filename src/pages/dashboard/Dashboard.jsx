import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import imgFromAsset from '../../assets/img/oficialasset.png'

import './Dashboard.css';
import trisoft from '../../assets/img/logo.png'
import If from '../../components/If';
import {obterTotalContas, fetchContasReducer} from '../../store/actions/ContaAction';
import PieChart from '../../components/chart/PieChart';
import BarChart from '../../components/chart/BarChart';
import Header from '../../components/form/header/Header';

class Dashboard extends Component {    
    constructor() {
        super();
        this.state = {};
    }
    
    componentDidMount() {
       this.props.obterTotalContas()
       //this.props.fetchContasReducer()
    }

    renderImage(){
        return <img src={trisoft} alt="trisoft" width="20px" />
    }
    
    render() {   
        let mostrarLogo = true;
        return (  
            <div className="p-grid p-fluid">   

                <If test={!mostrarLogo}>
                    <div className="p-col-12 p-lg-12">        
                        <img src={imgFromAsset} style={{ width: '100%', marginTop: '1%', marginLeft: '0%'}} alt="TriSoft"/>                     
                    </div> 
                </If>

                <Header label="Dashboard"/>

                <div className="p-col-6 p-lg-6">        
                    <PieChart series={[this.props.totalReceitas,this.props.totalDespesas]} labels={["Receitas", "Despesas"]}/>
                </div>

                <div className="p-col-6 p-lg-6">        
                    <BarChart/>
                </div>
                
                <h1>Despesas: {this.props.totalDespesas} - Receitas: {this.props.totalReceitas}</h1>               

                {/* Componentizar e usar no changes */}
                <div className="p-col-12 p-lg-12">        
                    <label >                                                 
                        <span style={{marginLeft: '10px', fontSize: '10px'}}>
                            {this.props.v3.name}
                            {this.props.v3.version}
                            - {this.props.v3.date}
                        </span>
                    </label>          
                </div> 
            </div>
        )
    }
}

const mapStateToProps = store => ({
    v3: store.dashboardReducer.dashboardInfoV3,
    totalDespesas: store.contaReducer.totalDespesas,
    totalReceitas: store.contaReducer.totalReceitas
  });

const mapDispatchToProps = dispatch => bindActionCreators({
    obterTotalContas ,
    fetchContasReducer  
}, dispatch)

  

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);