import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    const productList = useSelector(state => state.productList)

    const { loading, error, products } = productList
    
    return (
        <>
            <h1>New Products</h1>
            {loading ? (<h2>Loading....</h2>) : error ? (<Message variant = 'danger'>{error}</Message>) : 
            (<Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="align-items-stretch d-flex">
                        <Product product={product} />
                    </Col>
                ))}
            </Row>)
            
            }
        </>
    )
}

export default HomeScreen
