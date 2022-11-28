import React from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Link from 'next/link';
import Footer from '../../components/Footer';
 
class Newdeck extends React.Component {
  state = {
    _id: '',
    jugador: '',
    habilidad: '',
    arquetipo: '',
    arquetipo_image: '',
    engine: '',
    top: '',
    puesto: '',
    etiquetas: '',
    mainuno: '',
    maindos: '',
    maintres: '',
    maincuatro: '',
    maincinco: '',
    mainseis: '',
    mainsiete: '',
    mainocho: '',
    mainnueve: '',
    maindiez: '',
    mainonce: '',
    maindoce: '',
    maintrece: '',
    maincatorce: '',
    mainquince: '',
    maindieciseis: '',
    maindiecisiete: '',
    maindieciocho: '',
    maindiecinueve: '',
    mainveinte: '',
    mainveintiuno: '',
    mainveintidos: '',
    mainveintitres: '',
    mainveinticuatro: '',
    mainveinticinco: '',
    mainveintiseis: '',
    mainveintisiete: '',
    mainveintiocho: '',
    mainveintinueve: '',
    maintreinta: '',
    extrauno: '',
    extrados: '',
    extratres: '',
    extracuatro: '',
    extracinco: '',
    extraseis: '',
    extrasiete: '',
    extraocho: '',
    extranueve: '',
    extradiez: '',
    sideuno: '',
    sidedos: '',
    sidetres: '',
    sidecuatro: '',
    sidecinco: '',
    sideseis: '',
    sidesiete: '',
    sideocho: '',
    sidenueve: '',
    sidediez: '',
    contacts: []
  }
 
  componentDidMount() {
    const url = 'https://api.duellinks.pro.com/decks/'
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ contacts: data })
      console.log(this.state.contacts)
     })
  }
 

  handleFormSubmit( event ) {
    event.preventDefault();

    const data_to_send = {
      _id: this.state._id,
      jugador: this.state.jugador,
      habilidad: this.state.habilidad,
      arquetipo: this.state.arquetipo,
      arquetipo_image: this.state.arquetipo_image,
      engine: this.state.engine,
      top: this.state.top,
      puesto: this.state.puesto,
      etiquetas: this.etiquetas,
      mainuno: this.state.mainuno,
      maindos: this.state.maindos,
      maintres: this.state.maintres,
      maincuatro: this.state.maincuatro,
      maincinco: this.state.maincinco,
      mainseis: this.state.mainseis,
      mainsiete: this.state.mainsiete,
      mainocho: this.state.mainocho,
      mainnueve: this.state.mainnueve,
      maindiez: this.state.maindiez,
      mainonce: this.state.mainonce,
      maindoce: this.state.maindoce,
      maintrece: this.state.maintrece,
      maincatorce: this.state.maincatorce,
      mainquince: this.state.mainquince,
      maindieciseis: this.state.maindieciseis,
      maindiecisiete: this.state.maindiecisiete,
      maindieciocho: this.state.maindieciocho,
      maindiecinueve: this.state.maindiecinueve,
      mainveinte: this.state.mainveinte,
      mainveintiuno: this.state.mainveintiuno,
      mainveintidos: this.state.mainveintidos,
      mainveintitres: this.state.mainveintitres,
      mainveinticuatro: this.state.mainveinticuatro,
      mainveinticinco: this.state.mainveinticinco,
      mainveintiseis: this.state.mainveintiseis,
      mainveintisiete: this.state.mainveintisiete,
      mainveintiocho: this.state.mainveintiocho,
      mainveintinueve: this.state.mainveintinueve,
      maintreinta: this.state.maintreinta,
      //
      extrauno: this.state.extrauno,
      extrados: this.state.extrados,
      extratres: this.state.extratres,
      extracuatro: this.state.extracuatro,
      extracinco: this.state.extracinco,
      extraseis: this.state.extraseis,
      extrasiete: this.state.extrasiete,
      extraocho: this.state.extraocho,
      extranueve: this.state.extranueve,
      extradiez: this.state.extradiez,
      //
      sideuno: this.state.sidedos,
      sidedos: this.state.sidedos,
      sidetres: this.state.sidetres,
      sidecuatro: this.state.sidecuatro,
      sidecinco: this.state.sidecinco,
      sideseis: this.state.sideseis,
      sidesiete: this.state.sidesiete,
      sideocho: this.state.sideocho,
      sidenueve: this.state.sidenueve,
      sidediez: this.state.sidediez,
    }

    axios.post('https://api.duellinks.pro.com/decks/', data_to_send)
    .then(function (response) {
      //handle success
      console.log(response)
      alert('Deck creado');
    })
    .catch(function (response) {
        //handle error
        console.log(response)
    });
}


 
  render() {
    return (
      <div className="container">
        <Header />
        <h1 className="h1margen">Creador de Decks</h1>
        <div className='row'>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Jugador</label>
                <input type="text" name="jugador" className="form-control" value={this.state.jugador} onChange={e => this.setState({ jugador: e.target.value })}/>
 
                <label>Habilidad</label>
                <input type="text" name="habilidad" className="form-control" value={this.state.habilidad} onChange={e => this.setState({ habilidad: e.target.value })}/>
 
                <label>Arquetipo</label>
                <input type="text" name="arquetipo" className="form-control" value={this.state.arquetipo} onChange={e => this.setState({ arquetipo: e.target.value })}/>
 
                <label>Imagen del arquetipo</label>
                <select type="text" name="arquetipo_image" className="form-control" value={this.state.arquetipo_image} onChange={e => this.setState({ arquetipo_image: e.target.value })}>
                        <option value=""></option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/v1665726153/imagenes%20arquetipos/image_r5nz4a.webp">salamangrande</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/v1666064655/imagenes%20arquetipos/Foto_seraf%C3%ADn_estelar_soberan%C3%ADa_1_hliu1x.jpg">serafin estelar</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/v1665797061/imagenes%20arquetipos/E.H._Stratos_vef3ns.png">héroes</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/v1666064655/imagenes%20arquetipos/Foto_satelcaballero_puentecielo_iuetz8.jpg">telcaballero</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/v1666064732/imagenes%20arquetipos/Foto_mago_oscuro_ldozix.jpg">mago oscuro</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/v1666064774/imagenes%20arquetipos/Shiranui_svasvr.png">shiranui</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/v1666064642/imagenes%20arquetipos/Creaci%C3%B3n_de_los_Emperadores_Meklord_solqne.jpg">meklord</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/v1666074601/imagenes%20arquetipos/buster_blader__the_dragon_destroyer_swordsman_by_omgitsjohannes_dbt3eth-fullview_ywyylf.jpg">buster blader</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/v1667696211/imagenes%20arquetipos/Foto_archidemonio_inf_3Frnico_1_bymuoi.webp">Infernity</option>
                                        
                        </select>
 
                <label>Engine</label>
                <input type="text" name="engine" className="form-control" value={this.state.engine} onChange={e => this.setState({ engine: e.target.value })}/>
                <br/>

            </form>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Top</label>
                <input type="text" name="top" className="form-control" value={this.state.top} onChange={e => this.setState({ top: e.target.value })}/>
 
                <label>Puesto</label>
                <input type="text" name="puesto" className="form-control" value={this.state.puesto} onChange={e => this.setState({ puesto: e.target.value })}/>
 
                <label>Etiquetas</label>
                <input type="text" name="etiquetas" className="form-control" value={this.state.etiquetas} onChange={e => this.setState({ etiquetas: e.target.value })}/>
 
                <label>Main 1</label>
                <input type="text" name="mainuno" className="form-control" value={this.state.mainuno} onChange={e => this.setState({ mainuno: e.target.value })}/>
 
                <label>Main 2</label>
                <input type="text" name="maindos" className="form-control" value={this.state.maindos} onChange={e => this.setState({ maindos: e.target.value })}/>
                <br/>

            </form>
                </div>
            </div>
        </div>
        
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Main 3</label>
                <input type="text" name="maintres" className="form-control" value={this.state.maintres} onChange={e => this.setState({ maintres: e.target.value })}/>
 
                <label>Main 4</label>
                <input type="text" name="maincuatro" className="form-control" value={this.state.maincuatro} onChange={e => this.setState({ maincuatro: e.target.value })}/>
 
                <label>Main 5</label>
                <input type="text" name="maincinco" className="form-control" value={this.state.maincinco} onChange={e => this.setState({ maincinco: e.target.value })}/>
 
                <label>Main 6</label>
                <input type="text" name="mainseis" className="form-control" value={this.state.mainseis} onChange={e => this.setState({ mainseis: e.target.value })}/>
 
                <label>Main 7</label>
                <input type="text" name="mainsiete" className="form-control" value={this.state.mainsiete} onChange={e => this.setState({ mainsiete: e.target.value })}/>
                <br/>

            </form>
                </div>
            </div>
        </div>

        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Main 8</label>
                <input type="text" name="mainocho" className="form-control" value={this.state.mainocho} onChange={e => this.setState({ mainocho: e.target.value })}/>
 
                <label>Main 9</label>
                <input type="text" name="mainnueve" className="form-control" value={this.state.mainnueve} onChange={e => this.setState({ mainnueve: e.target.value })}/>
 
                <label>Main 10</label>
                <input type="text" name="maindiez" className="form-control" value={this.state.maindiez} onChange={e => this.setState({ maindiez: e.target.value })}/>
 
                <label>Main 11</label>
                <input type="text" name="mainonce" className="form-control" value={this.state.mainonce} onChange={e => this.setState({ mainonce: e.target.value })}/>
 
                <label>Main 12</label>
                <input type="text" name="maindoce" className="form-control" value={this.state.maindoce} onChange={e => this.setState({ maindoce: e.target.value })}/>
                <br/>
      
            </form>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Main 13</label>
                <input type="text" name="maintrece" className="form-control" value={this.state.maintrece} onChange={e => this.setState({ maintrece: e.target.value })}/>
 
                <label>Main 14</label>
                <input type="text" name="maincatorce" className="form-control" value={this.state.maincatorce} onChange={e => this.setState({ maincatorce: e.target.value })}/>
 
                <label>Main 15</label>
                <input type="text" name="mainquince" className="form-control" value={this.state.mainquince} onChange={e => this.setState({ mainquince: e.target.value })}/>
 
                <label>Main 16</label>
                <input type="text" name="maindieciseis" className="form-control" value={this.state.maindieciseis} onChange={e => this.setState({ maindieciseis: e.target.value })}/>
 
                <label>Main 17</label>
                <input type="text" name="maindiecisiete" className="form-control" value={this.state.maindiecisiete} onChange={e => this.setState({ maindiecisiete: e.target.value })}/>
                <br/>
      
            </form>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Main 18</label>
                <input type="text" name="maindieciocho" className="form-control" value={this.state.maindieciocho} onChange={e => this.setState({ maindieciocho: e.target.value })}/>
 
                <label>Main 19</label>
                <input type="text" name="maindiecinueve" className="form-control" value={this.state.maindiecinueve} onChange={e => this.setState({ maindiecinueve: e.target.value })}/>
 
                <label>Main 20</label>
                <input type="text" name="mainveinte" className="form-control" value={this.state.mainveinte} onChange={e => this.setState({ mainveinte: e.target.value })}/>
 
                <label>Main 21</label>
                <input type="text" name="mainveintiuno" className="form-control" value={this.state.mainveintiuno} onChange={e => this.setState({ mainveintiuno: e.target.value })}/>
 
                <label>Main 22</label>
                <input type="text" name="mainveintidos" className="form-control" value={this.state.mainveintidos} onChange={e => this.setState({ mainveintidos: e.target.value })}/>
                <br/>
      
            </form>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Main 23</label>
                <input type="text" name="mainveintitres" className="form-control" value={this.state.mainveintitres} onChange={e => this.setState({ mainveintitres: e.target.value })}/>
 
                <label>Main 24</label>
                <input type="text" name="mainveinticuatro" className="form-control" value={this.state.mainveinticuatro} onChange={e => this.setState({ mainveinticuatro: e.target.value })}/>
 
                <label>Main 25</label>
                <input type="text" name="arquetipo" className="form-control" value={this.state.mainveinticinco} onChange={e => this.setState({ mainveinticinco: e.target.value })}/>
 
                <label>Main 26</label>
                <input type="text" name="mainveintiseis" className="form-control" value={this.state.mainveintiseis} onChange={e => this.setState({ mainveintiseis: e.target.value })}/>
 
                <label>Main 27</label>
                <input type="text" name="mainveintisiete" className="form-control" value={this.state.mainveintisiete} onChange={e => this.setState({ mainveintisiete: e.target.value })}/>
                <br/>
      
            </form>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Main 28</label>
                <input type="text" name="mainveintiocho" className="form-control" value={this.state.mainveintiocho} onChange={e => this.setState({ mainveintiocho: e.target.value })}/>
 
                <label>Main 29</label>
                <input type="text" name="mainveintinueve" className="form-control" value={this.state.mainveintinueve} onChange={e => this.setState({ mainveintinueve: e.target.value })}/>
 
                <label>Main 30</label>
                <input type="text" name="maintreinta" className="form-control" value={this.state.maintreinta} onChange={e => this.setState({ maintreinta: e.target.value })}/>
 
                <label>Extra 1</label>
                <input type="text" name="extrauno" className="form-control" value={this.state.extrauno} onChange={e => this.setState({ extrauno: e.target.value })}/>
 
                <label>Extra 2</label>
                <input type="text" name="extrados" className="form-control" value={this.state.extrados} onChange={e => this.setState({ extrados: e.target.value })}/>
                <br/>
      
            </form>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Extra 3</label>
                <input type="text" name="extratres" className="form-control" value={this.state.extratres} onChange={e => this.setState({ extratres: e.target.value })}/>
 
                <label>Extra 4</label>
                <input type="text" name="extracuatro" className="form-control" value={this.state.extracuatro} onChange={e => this.setState({ extracuatro: e.target.value })}/>
 
                <label>Extra 5</label>
                <input type="text" name="extracinco" className="form-control" value={this.state.extracinco} onChange={e => this.setState({ extracinco: e.target.value })}/>
 
                <label>Extra 6</label>
                <input type="text" name="extraseis" className="form-control" value={this.state.extraseis} onChange={e => this.setState({ extraseis: e.target.value })}/>
 
                <label>Extra 7</label>
                <input type="text" name="extrasiete" className="form-control" value={this.state.extrasiete} onChange={e => this.setState({ extrasiete: e.target.value })}/>
                <br/>
      
            </form>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Extra 8</label>
                <input type="text" name="extraocho" className="form-control" value={this.state.extraocho} onChange={e => this.setState({ extraocho: e.target.value })}/>
 
                <label>Extra 9</label>
                <input type="text" name="extranueve" className="form-control" value={this.state.extranueve} onChange={e => this.setState({ extranueve: e.target.value })}/>
 
                <label>Extra 10</label>
                <input type="text" name="extradiez" className="form-control" value={this.state.extradiez} onChange={e => this.setState({ extradiez: e.target.value })}/>
 
                <label>Extra 11</label>
                <input type="text" name="extraonce" className="form-control" value={this.state.extraonce} onChange={e => this.setState({ extraonce: e.target.value })}/>
 
                <label>Extra 12</label>
                <input type="text" name="extradoce" className="form-control" value={this.state.extradoce} onChange={e => this.setState({ extradoce: e.target.value })}/>
                <br/>
      
            </form>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Side 1</label>
                <input type="text" name="sideuno" className="form-control" value={this.state.sideuno} onChange={e => this.setState({ sideuno: e.target.value })}/>
 
                <label>Side 2</label>
                <input type="text" name="sidedos" className="form-control" value={this.state.sidedos} onChange={e => this.setState({ sidedos: e.target.value })}/>
 
                <label>Side 3</label>
                <input type="text" name="sidetres" className="form-control" value={this.state.sidetres} onChange={e => this.setState({ sidetres: e.target.value })}/>
 
                <label>Side 4</label>
                <input type="text" name="sidecuatro" className="form-control" value={this.state.sidecuatro} onChange={e => this.setState({ sidecuatro: e.target.value })}/>
 
                <label>Side 5</label>
                <input type="text" name="sidecinco" className="form-control" value={this.state.sidecinco} onChange={e => this.setState({ sidecinco: e.target.value })}/>
                <br/>
      
            </form>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="panel panel-primary">
                
                <div className="panel-body">
                <form>
                <label>Side 6</label>
                <input type="text" name="sideseis" className="form-control" value={this.state.sideseis} onChange={e => this.setState({ sideseis: e.target.value })}/>
 
                <label>Side 7</label>
                <input type="text" name="sidesiete" className="form-control" value={this.state.sidesiete} onChange={e => this.setState({ sidesiete: e.target.value })}/>
 
                <label>Side 8</label>
                <input type="text" name="sideocho" className="form-control" value={this.state.sideocho} onChange={e => this.setState({ sideocho: e.target.value })}/>
 
                <label>Side 9</label>
                <input type="text" name="sidenueve" className="form-control" value={this.state.sidenueve} onChange={e => this.setState({ sidenueve: e.target.value })}/>
 
                <label>Side 10</label>
                <input type="text" name="sidediez" className="form-control" value={this.state.sidediez} onChange={e => this.setState({ sidediez: e.target.value })}/>
                <br/>
      
            </form>
                </div>
            </div>
        </div>
        
        </div> 
        <input type="submit" className="btn btn-primary btn-block" onClick={e => this.handleFormSubmit(e)} value="Crear deck" />
        <div className="col-md-12">  
        <h3>Lista de Decks</h3>
        <table className="table table-bordered table-striped">
        <thead>  
        <tr>
            <th>Deck</th>
            <th>Habilidad</th>
            <th>Arquetipo</th>
            <th>Jugador</th>
            <th>Fecha</th>     
        </tr>
        </thead>
        <tbody>
        {this.state.contacts.map((contact, index) => (
        <tr key={index._id}>

            <td> <Link href={`/decks/${contact._id}`} ><a><img src={ contact.arquetipo_image } height='50' /></a></Link> </td>
            <td>{ contact.habilidad }</td>
            <td>{ contact.arquetipo }</td>
            <td>{ contact.jugador } </td>
            <td>{ contact.createdAt }</td>

        </tr>
        ))}
        </tbody>
        </table>
         </div>  
            <Footer />
        </div>
    );
  }
}
export default Newdeck;