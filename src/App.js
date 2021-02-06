/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import styled from 'styled-components'

const picture = require('./images/messi.jpg')
const music1 = require('./images/music.jpg').default
const music2 = require('./images/musica1.jpg').default
const music3 = require('./images/music6.jpg').default
const music4 = require('./images/music5.jpg').default
const music5 = require('./images/images4.jpg').default
const music6 = require('./images/images3.jpg').default

console.log(picture)

const sections1 = [1, 2, 3]
const section2 = [1, 2]
const section3 = [music1, music2, music3, music4, music5, music6]
const sections4 = [1, 2, 3, 4]
function App() {
  return (
    <AppContainer className="App">
      <div id='body-container'>

        <div id="content-top">
          <div id="top-left">
            <p id='title' > CONCURSOS</p>
            {sections1.map(() => {
              return (
                <div id="container-cursos-right">
                  <div id="cursos-right">
                    <img src={picture.default} style={{
                      width: 100,
                      height: 100
                    }} />
                  </div>
                  <div id="cursos-left">
                    <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur congue a,  Quisque  ex,  vel...</p>
                    <div id='button'>
                      Participar
                 </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div id="top-right">

            <p id="title">LO RECOMENDADO PARA VOS</p>
            < div id="sections2">
              {section2.map(() => {
                return (
                  <div className="sections2-class" id='sections2-content'>
                    <img src={picture.default} width="100%" height="234" />
                    <span style={{ textAlign: 'left', fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam magna ex, pulvinar ut efficitur vel, condimentum sit amet velit. </span>
                  </div>)
              })}
            </div>
          </div>
        </div>
        <div id="content-down">

          <div id="down-section1" className="content">
            <p id="title">QUE QUERÉS ESCUCHAR?</p>
            <div id="down-section1-content">
              {section3.map((image) => {
                return (
                  <div style={{ flex: 1, height: 200, paddingRight: 10, paddingTop: 10 }}>
                    <img src={image} id="imagen3" height={200} />
                  </div>
                )
              })}
            </div>
            <div style={{ textAlign: 'right', paddingRight: 15 }}>ver mas</div>
          </div>
          <div id='down-section2' className="content">
            <p id="title">NUESTRAS FIGURAS</p>
            <div id="down-section2-content">
              {sections1.map(() => (
                < div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div id="down-section2-left">
                    <span style={{ fontWeight: 'bold', paddingBottom: 10, paddingTop: 10 }}>Pelado Lopez</span>
                  </div>
                  <div id='figure-content' style={{ display: 'flex' }}>
                    <img src={picture.default} style={{ width: 80, height: 80, borderRadius: "50%" }} />
                    < span style={{ paddingLeft: 10, textAlign: 'left' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt at urna nec condimentum. Aenean dapibus, mi eget placerat finibus, lorem augue vul...
                   </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id='down-section3' className="content" >
            <p id='title'>ÚLTIMAS NOTICIAS DE ESPECTÁCULOS</p>
            < div id="sections2">
              {sections4.map(() => {
                return (
                  <div id='sections2-content'>
                    <img id='imagen4' src={picture.default} />
                    <span style={{ textAlign: 'left', fontWeight: 'bold', marginTop: 10, marginBottom: 15 }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam magna ex, pulvinar ut efficitur vel, condimentum sit amet velit. </span>
                  </div>)
              })}
            </div>
          </div>
        </div>

      </div>
    </AppContainer >
  );
}

export default App;


const AppContainer = styled.div`
  height:100vh;
  width:100%;
  margin:auto;
  display:flex;
  justify-content:center;

  #imagen3{
    width:100%;
    min-width: 100px;
  }

  #imagen4{
    width:100%;
    height:150px
  }
 
  /*  ------------------------ content top ---------------------- */

  #sections2{
    display: flex;
    flex-direction: row;
    min-width:700px
  }

  #sections2-content{
    flex:1;
    padding-right:15px;
    display: flex;
    flex-direction: column;
  }
  #body-container{
    display: flex;
    flex-direction: column;
    margin-left:auto;
    margin-right:auto;
    max-width: 1210px;

  }

  #title {
    text-align: left;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 0px;
  }

  #content-top{
    flex:1;
    display:flex;
    flex-direction:row;
  }

  #top-left{
    flex:1;
    display: flex;
    flex-direction:column;
    min-width: 450px;
    max-width: 500px;
  }

  #top-right{
    flex:2;
    display:flex;
    flex-direction:column;
    padding-left:20px;
  }

  #button{
    border: 1px solid #557bb5;
    cursor: pointer;
    padding: 4px 13px;
    border-radius: 3px;
  }

  #container-cursos-right{
    display:flex;
    flex-direction:row;
    align-items:center;
    padding: 0px 0px 10px 0px;
    
  }

  #cursos-right{
    display:flex;
    flex-direction:column;
    flex:1
    
  }

  #cursos-left{
    display:flex;
    flex-direction:column;
    flex:3;
    align-items:center;
    padding-left:10px
  }
 /* ---------------------------------- end content top ------------------------------------ */
  #content-down{
    flex:2;
    width:100%
  }
  #down-section1-content{
    flex:1;
    display:flex;
    flex-direction:row;
    flex-wrap: wrap
  }

  .content{
    display:flex;
    flex-direction:column;
    flex:1
  }


  #down-section2-left{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: fit-content;
  }

  #down-section2-content{
    display:flex;
    flex-direction:row;
  }

  #down-section3{
    padding-bottom:30px
  }


  @media (max-width: 1220px) {

    #content-top{
      flex-direction: column;
      justify-content: center;   
      padding-left:10px;
      padding-right:10px;
    }

    #top-right {
      padding-left:0px
    }

    #imagen3{
      min-width: 370px;
      width:100%
    }
    #imagen4{
      min-width: 350px;
      width:100%
    }
    .content{
      padding-left:10px
    }

    #sections2{
      min-width:0;
      flex-wrap:wrap;
    }

    #down-section2-left{
      align-items:center
    }

    .sections2-class{
       min-width: 300px !important;
    }
    #figure-content{
      display:flex;
      flex-direction:column;
      align-items:center;
    }
      
  }

  @media (max-width: 620px) {

    #sections2-content{
      padding-right:0px
    }

    #sections2{
      min-width:0;
      flex-wrap:wrap;
      flex-direction:column;
    }
    .sections2-class{
       min-width: 0px !important;
    }

    #imagen3{
      min-width:0px
    } 

    #down-section2-content{
      flex-direction:column;
      padding: 20px;
    }

    #container-cursos-right{
      flex-direction:column;
      min-width:0px;
    }


    #down-section1-content{
      flex-direction:column;
    }

    #top-left{
      min-width:0px;
      padding-right:10px;
    }

    #imagen4{
      min-width:0px;
    }
  }

  
`
