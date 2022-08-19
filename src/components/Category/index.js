import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Category.module.scss'
import { getCategoriesAction } from '../../store/category/actions'

function Categories() {
  const dispatch = useDispatch()
  const { categories } = useSelector((state) => state.categoryReducer)
  useEffect(() => {
    dispatch(getCategoriesAction())
  }, [])
  return (
    <ul className={styles.category_list}>
      {categories.map((category, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Category key={index} {...category} />
      ))}
    </ul>
  )
}
function Category({ name, subcategories, ...props }) {
  const [isOpenSubcategories, setOpenSubcategories] = useState(false)
  const toggleSubcategories = () => setOpenSubcategories(!isOpenSubcategories)
  function renderSubcategories() {
    if (isOpenSubcategories && subcategories && subcategories.length) {
      return (
        <ul className={styles.category_list}>
          {subcategories.map((item) => (
            <Category {...item} />
          ))}
        </ul>
      )
    }
    return null
  }
  return (
    <li className={styles.category_item}>
      <span aria-hidden onClick={toggleSubcategories} className={styles.category}>
        {name}
      </span>
      {renderSubcategories()}
    </li>
  )
}

export default Categories
Category.propTypes = {
  name: PropTypes.string,
  subcategories: PropTypes.array,
}
