import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true);
  const { id } = useParams()
  let q

  useEffect(() => {
    const db = getFirestore()
    const productosRef = collection(db, "productos")
    if (id !== undefined) {
      q = query(productosRef, where("category", "==", id))
    }
    else {
      q = productosRef
    }

    getDocs(q).then((snapshot) => {
      setProductos(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
      )
    })
      .finally(() => {
        setLoading(false);
      });
  }, [id])

  return (
    <div className='itemListContainer'>
      {loading ? (
        <div style={{ margin: "50px" }} className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  )
}



