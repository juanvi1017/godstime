import React, { useState } from 'react'
import "../styles/modal.css"
import InputFile from '../components/InputFiles';

function ModalProduct({ title = '' }) {

  const fileInput = React.createRef();

  const [attachedFile, setAttachedFile] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [description, setDescription] = useState('');
  const [detail1, setDetail1] = useState('');
  const [detail2, setDetail2] = useState('');
  const [detail3, setDetail3] = useState('');
  const [detail4, setDetail4] = useState('');
  const [detail5, setDetail5] = useState('');
  const [men, setMen] = useState(true);
  const [women, setWomen] = useState(false);
  const [metalico, setMetalico] = useState(true);
  const [silicona, setSilicona] = useState(false);
  const [cant, setCant] = useState(1);

  const handleChange = (event) => {
    if (event.target.id === "name") {
      setName(event.target.value)
    } else if (event.target.id === "price") {
      setPrice(event.target.value)
    } else if (event.target.id === "salePrice") {
      setSalePrice(event.target.value)
    } else if (event.target.id === "description") {
      setDescription(event.target.value)
    } else if (event.target.id === "cant") {
      setCant(event.target.value)
    } else if (event.target.id === "detail1") {
      setDetail1(event.target.value)
    } else if (event.target.id === "detail2") {
      setDetail2(event.target.value)
    } else if (event.target.id === "detail3") {
      setDetail3(event.target.value)
    } else if (event.target.id === "detail4") {
      setDetail4(event.target.value)
    } else if (event.target.id === "detail5") {
      setDetail5(event.target.value)
    }
  }

  const addFile = ({ target }) => {
    const { value } = target;
    setAttachedFile(value);
  }

  const handleCheckMen = () => {
    setMen(true);
    setWomen(false);
  }

  const handleCheckWomen = () => {
    setMen(false);
    setWomen(true);
  }

  const handleCheckMetalico = () => {
    setMetalico(true);
    setSilicona(false);
  }

  const handleCheckSilicona = () => {
    setMetalico(false);
    setSilicona(true);
  }

  const submit = async () => {
    let dataSend = attachedFile ? document.getElementById("archivoGeneric").files[0] : "";
    let data = new FormData();
    data.append("attach_file", dataSend);
    data.append("name", name);
    data.append("price", price);
    data.append("salePrice", salePrice);
    data.append("cant", cant);
    data.append("description", description);
    data.append("men", men);
    data.append("silicona", silicona);
    data.append("women", women);
    data.append("metalico", metalico);
    data.append("detail1", detail1);
    data.append("detail2", detail2);
    data.append("detail3", detail3);
    data.append("detail4", detail4);
    data.append("detail5", detail5);
    console.log(data)
  }

  return (
    <div className="modal fade" id="addproduct" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">X</button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input type="text" className="form-control" id='name' value={name} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Precio</label>
              <input type="number" className="form-control" id='price' value={price} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Precio de oferta</label>
              <input type="number" className="form-control" id='salePrice' value={salePrice} onChange={handleChange} />
            </div>
            <div style={{ display: 'none' }}>
              <input
                ref={fileInput}
                type="file"
                id="archivoGeneric"
                name="archivoGeneric"
                label="Archivo"
                fullWidth
                autoComplete="billing address-line1"
                onChange={addFile}
              />
            </div>
            <div className="mb-3">
              <InputFile
                label="Archivo"
                id="archivoGeneric"
                value={attachedFile}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Imagen del producto2</label>
              <input className="form-control" type="file" name='files' onChange={addFile} />
            </div>
            <div className="mb-3">
              <label className="form-label">Descripcion</label>
              <textarea className="form-control" rows="5" id='description' value={description} onChange={handleChange}></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Cantidad en stock</label>
              <input type="number" className="form-control" id='cant' value={cant} onChange={handleChange} />
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" checked={men} onChange={handleCheckMen} />
              <label className="form-check-label">Hombre</label>
              <input className="form-check-input check-modal" type="checkbox" checked={women} onChange={handleCheckWomen} />
              <label className="form-check-label check-modal-label">Mujer</label>
            </div>
            <div className="mb-3">
              <label className="form-label">Detalle 1</label>
              <input type="text" className="form-control" id='detail1' value={detail1} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Detalle 2</label>
              <input type="text" className="form-control" id='detail2' value={detail2} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Detalle 3</label>
              <input type="text" className="form-control" id='detail3' value={detail3} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Detalle 4</label>
              <input type="text" className="form-control" id='detail4' value={detail4} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Detalle 5</label>
              <input type="text" className="form-control" id='detail5' value={detail5} onChange={handleChange} />
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" checked={metalico} onChange={handleCheckMetalico} />
              <label className="form-check-label">Metalico</label>
              <input className="form-check-input check-modal" type="checkbox" checked={silicona} onChange={handleCheckSilicona} />
              <label className="form-check-label check-modal-label">Silicona</label>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={() => submit()}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalProduct