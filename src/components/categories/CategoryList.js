import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { bindActionCreators } from "redux"
import * as categoryActions from "../../redux/actions/categoryActions"
import * as productActions from "../../redux/actions/productActions"
import { Badge } from 'reactstrap';


class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories()

  };

  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id);

  };

  render() {
    return (
      <div>
        <h1>
        <Badge color="info">
        categories
         </Badge>
        </h1>
        <ListGroup>
          <ListGroupItem>
            {
              this.props.categories.map(category => (
                <ListGroupItem active={category.id === this.props.currentCategory.id} onClick={() => this.selectCategory(category)}
                  key={category.id}>
                  {category.categoryName}
                </ListGroupItem>
              )
              )
            }
          </ListGroupItem>
        </ListGroup>
        
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer
  }

}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
      changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
      getProducts: bindActionCreators(productActions.getProducts, dispatch)
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
