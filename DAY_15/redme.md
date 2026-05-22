<FoodCart val={value} />
Step 1 → React creates props object
{
   val: value
}
Step 2 → Child receives it
function FoodCart(val)

Here val = whole props object

So:

val = {
   val:{
      id:1,
      food:"Pizza",
      Price:"200"
   }
}
Step 3 → Accessing food
val.val.food

Breakdown:

val        → props object
val.val    → actual data object
val.val.food → "Pizza"
With Destructuring (Best Method)
function FoodCart({val})

React internally does:

const val = props.val

Now:

val = {
   id:1,
   food:"Pizza"
}

So directly:

val.food
Keywords 🔑
Props → data passed from parent to child
Props object → React combines all props into one object
val={value} → prop name = val
FoodCart(val) → receives full props object
val.val.food → props.val.food
Destructuring → extracting values from object
function FoodCart({val}) → directly extracts val
Best Practice → always destructure props in React

..........................................................................................................