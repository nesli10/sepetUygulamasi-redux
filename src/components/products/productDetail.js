import React from react;
import TextInput from "../toolbox/TextInput";

const productDetail=(
 categories,
 product,
 onSave,onChange
)=>{
 return(
    <form onSubmit={onSave}>
        <h2>{product.id?"Güncelle":"Ekle"}</h2>
        <TextInput 
        name="productName"
         label="productName" 
         value={product.productName} 
         onChange={onChange}
         error="hata"
         >
        </TextInput>

        <buttton type="submit" className="btn btn-success">
          Save
        </buttton>

    </form>
 )
}
export default productDetail;