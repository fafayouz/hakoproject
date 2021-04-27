import React, { useRef, useState } from 'react'
import './Form.css'
import API from '../../../Api/api'
import imageholder from './imageholder.jpg'
import { TextField } from '@material-ui/core'


const Form = () => {
  const [title, setTitle] = useState()
  const [price, setPrice] = useState()
  const [transiction, setTransiction] = useState()
  const [area, setArea] = useState()
  const [bio , setBio] = useState()
  const [typedebien, setTypedebien] = useState()
  const [wilaya, setWilaya] = useState()
  const [douche, setDouche] = useState()
  const [salle, setSalle] = useState()
  const [imagefile, setImagefile] = useState('')
  const [messageerr , setMessageerr]=useState()
  const [messagevalid, setMessagevalid]=useState()
  const [imagefile1, setImagefile1] = useState('')
  const [imagefile2, setImagefile2] = useState('')
  const [show, setShow] = useState(true)
    const [{alt, src}, setImg] = useState({
        src: imageholder,
        alt: 'Upload an Image'
    });
    const [{alt1, src1}, setImg1] = useState({
        src1: imageholder,
        alt1: 'Upload an Image'
    });
    const [{alt2, src2}, setImg2] = useState({
        src2: imageholder,
        alt2: 'Upload an Image'
    });

  const el = useRef()
  const back = ()=> {
    setShow(true)
  }
  const Show = () => {
    setShow(false)
  }

  const handel = (e) => {
    const ff = e.target.files[0]
    setImagefile(ff)
    if(ff) {
      setImg({
          src: URL.createObjectURL(ff),
          alt: ff.name
      });    
  }   
  }
  const handel1 = (e) => {
    const ff = e.target.files[0]
    setImagefile1(ff)
    if(ff) {
      setImg1({
          src1: URL.createObjectURL(ff),
          alt1: ff.name
      });    
  } 
    
  }
  const handel2 = (e) => {
    const ff = e.target.files[0]
    setImagefile2(ff)
    if(ff) {
      setImg2({
          src2: URL.createObjectURL(ff),
          alt2: ff.name
      });    
  } 
  }
  const Send = () => {
    const formData = new FormData()
    formData.set('imagefile', imagefile)
    formData.set('imagefile1', imagefile1)
    formData.set('imagefile2', imagefile2)
    formData.set('title', title)
    formData.set('price', price)
    formData.set('douche', douche)
    formData.set('wilaya', wilaya)
    formData.set('transiction', transiction)
    formData.set('typedebien', typedebien)
    formData.set('salle', salle)
    formData.set('area', area)
    formData.set('title', title)
    formData.set('bio', bio)
    API.post('api/profile', formData)
      .then((res) => {
        if(res.data.erreur === true){
             setMessageerr(res.data.message)
        }else{
          setMessagevalid(res.data.message)
          setTitle('')
          setWilaya('')
          setPrice('')
          setSalle('')
          setArea('')
          setTransiction('')
          setDouche('')
          setImagefile('')
          setTypedebien('')
          setBio('')
          setImg({
            src: imageholder,
            alt: 'Upload an Image'
        });  
        setImg1({
          src1: imageholder,
          alt1: 'Upload an Image'
      });  
      setImg2({
        src2: imageholder,
        alt2: 'Upload an Image'
    });  
        }
      })
      .catch((err) => {
        setMessageerr('Vous devez choisir trois images')
      })
  }
  return (
    <>
    {messageerr && (
      <div className='toolbar-error-message'>
    <span >{messageerr}</span>
    </div>
    )}
    {messagevalid && (
      <div className='toolbar-valid-message'>
    <span >{messagevalid}</span>
    </div>)}
    
    
    <div className="admin-post-container">
      {show ? (
        <>
          <div className="post-btn-container">
            <div className="post-btn">
              <input
                placeholder="Titre"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="btn-select"
              />
            </div>
            <div className="post-btn">
              <select
                value={salle}
                onChange={(event) => setSalle(event.target.value)}
                className="btn-select"
                
              >
                <option>SALLE</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
              </select>
            </div>
            <div className="post-btn">
              <select
                value={typedebien}
                onChange={(event) => setTypedebien(event.target.value)}
                class="btn-select"
              >
                <option>Type De bien</option>
                <option>Appartement</option>
                <option>Bloc</option>
                <option>Duplex</option>
                <option>Hangars</option>
                <option>Locaux</option>
                <option>Niveau de Villa</option>
                <option>Terrain</option>
                <option>Villa</option>
              </select>
            </div>
            <div className="post-btn">
              <select
                value={transiction}
                onChange={(event) => setTransiction(event.target.value)}
                class="btn-select"
              >
                <option value="Transiction">Transiction </option>
                <option value="Location">Location</option>
                <option value="Vente">Vente</option>
              </select>
            </div>
            <div className="post-btn">
              <select
                value={wilaya}
                onChange={(event) => setWilaya(event.target.value)}
                class="btn-select"
              >
                <option>Wilayas </option>
                <option>Adrar </option>
                <option>Chlef </option>
                <option>Laghouat </option>
                <option>Oum El Bouaghi </option>
                <option>Batna </option>
                <option>Béjaïa </option>
                <option>Biskra </option>
                <option>Béchar </option>
                <option>Blida </option>
                <option>Bouira </option>
                <option>Tamanrasset </option>
                <option>Tébessa </option>
                <option>Tlemcen </option>
                <option>Tiaret </option>
                <option>Tizi Ouzou </option>
                <option>Alger </option>
                <option>Djelfa </option>
                <option>Jijel </option>
                <option>Sétif </option>
                <option>Saïda </option>
                <option>Skikda </option>
                <option>Sidi Bel Abbès </option>
                <option>Annaba </option>
                <option>Guelma </option>
                <option>Constantine </option>
                <option>Médéa </option>
                <option>Mostaganem </option>
                <option>Msila </option>
                <option>Mascara </option>
                <option>Ouargla </option>
                <option>Oran </option>
                <option>El Bayadh </option>
                <option>Illizi </option>
                <option>Bordj Bou Arreridj </option>
                <option>Boumerdès </option>
                <option>El Tarf </option>
                <option>Tindouf </option>
                <option>Tissemsilt </option>
                <option>El Oued </option>
                <option>Khenchela </option>
                <option>Souk Ahras </option>
                <option>Tipaza </option>
                <option>Mila </option>
                <option>Aïn Defla </option>
                <option>Naâma </option>
                <option>Aïn Témouchent </option>
                <option>Ghardaïa </option>
                <option>Relizane </option>
              </select>
            </div>
            <div className="post-btn">
              <select
                value={douche}
                onChange={(event) => setDouche(event.target.value)}
                class="btn-select"
              >
                <option>Douche </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div className="post-btn">
              <input
                value={area}
                onChange={(event) => setArea(event.target.value)}
                type="number"
                placeholder="Superficie"
                className="btn-select"
              ></input>
            </div>
            <div className="post-btn">
              <input
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                type="number"
                placeholder="Prix"
                className="btn-select"
              ></input>
            </div>
          </div>
          <div className='toolbar-next-back'>
            <div className='bio-box'>
            <TextField
          id="outlined-multiline-static"
          label="Description"
          value={bio}
          onChange={(event) => setBio(event.target.value)}
          multiline
          rows={5}
          defaultValue="Description de l'article"
          variant="outlined"
        />
            </div>
          <div onClick={Show} className="next-btn">
            <span >Suivant</span>
          </div>
          </div>
          
        </>
      ) : (
        <>
          <div className="image-gallery-container">
          <div className='image-preview-container'>
              <div className="post-img">
                <input
                placeholder='ajouter'
                  type="file"
                  id='files'
                  accept={'image/*'}
                  onChange={handel}
                  ref={el}
                />
                <label for='files'>
                  Upload Image
                </label>
              </div> 
              <div className='Imagedela'>
                <img src={src} alt={alt}/>
              </div>
            </div>
            <div className='image-preview-container'>
              <div className="post-img">
                <input
                placeholder='ajouter'
                  type="file"
                  id='files1'
                  accept={'image/*'}
                  onChange={handel1}
                  ref={el}
                />
                <label for='files1'>
                  Upload Image
                </label>
              </div> 
              <div className='Imagedela'>
                <img src={src1} alt={alt1}/>
              </div>
            </div>
            <div className='image-preview-container'>
              <div className="post-img">
                <input
                placeholder='ajouter'
                  type="file"
                  id='files2'
                  accept={'image/*'}
                  onChange={handel2}
                  ref={el}
                />
                <label for='files2'>
                  Upload Image
                </label>
              </div> 
              <div className='Imagedela'>
                <img src={src2} alt={alt2}/>
              </div>
            </div>
            
          </div>
        
          
          <div className='toolbar-next-back'>
            <div  onClick={back} className="next-btn">
              <span>Back</span>
            </div>
            <div onClick={Send} className="next-btn">
              <span >Poster</span>
            </div>
          </div>    
        </>
      )}
    </div>
    </>
  )
}

export default Form
