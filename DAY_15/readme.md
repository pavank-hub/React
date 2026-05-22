1.what is reactslicer.actions, why we export actions, actions ki zarurt kyu padi?

jb b main dipatch krta hu ki iss function ko execute karana hai, vo store ke pass jata aur store ko determine krna hota h ki ye kis Slice k part h thats why we export actions instead of normal functions

jab Dispatch(Increment()) hota h toh store k pass ye info jata h,
  
Dispatch se jo bheja gya hota h, aesa show hota h,
below one is "action"(object) in which we have type(define krta h kounsa slice hai) and playload(argument), (Slice1.js review to know more)

{type:"slice1/Increment" , playload: argument };


actions ke wjh se pta chl jata h konsa slice m jana hai, for example: above one is slice1

2.
Before Immer:

Increment: (state)=>{ 
    return {...state, count: state.count+1}
    }

After Immer:

Increment: (state)=> {state.count=state.count+1}


Immer : creates new draft(duplicate object) : updates/changes in duplicate ones,
{count:0}   {count:1}

Above both compare and returns new object (return {count:1})

Increment: (state)=> {state.count= state.count+1}

state.count++ its error, it returns a value , if u want to return then return a new object not value orelse just modify the draft

3.useSelector hook also known as Subscribing to the event , this hook used to update changes if made in count even though count variable updates in global or slicer1 file


----------------------------------------------------------------------------------------------------------

🧠 1. createSlice() — State + Reducers + Actions Ek Saath Banata Hai
Simple Meaning

Pehle Redux mein alag-alag likhna padta tha:

Initial State
Reducers
Action Types

# Your Code

const reactSlicer = createSlice({
    name: "slice1",
    initialState: { count: 0 },
    reducers: {
        Increment: (state) => { state.count += 1 },
        Decrement: (state) => { state.count -= 1 },
        Reset: (state) => { state.count = 0 }
    }
})

createSlice() Automatically Creates
1. Reducer

State change karne ka logic.

2. Actions

Increment()
Decrement()
Reset()

3. Action Types
"slice1/Increment"
"slice1/Decrement"

Action Type = slice name + "/" + reducer name

..........................................................................................................
2. configureStore() — Global Store Banata Hai
Simple Meaning

Store = Global Locker jahan saara data rakha jata hai.

..........................................................................................................
Why reactSlicer.reducer and reducers Are Different? (Super Simple Hinglish)

Ye Redux ka sabse common confusion hai. Chalo bahut simple tareeke se samjhte hain. 😊

🧠 reducers vs reducer

Word	    Meaning
reducers(ye tum likhte ho)	Tumhare saare functions ka collection (Increment, Decrement, Reset)
reducer	    Ek single final function jo Redux ko diya jata hai


🔹 In Your Code

const reactSlicer = createSlice({
    name: "slice1",
    initialState: { count: 0 },
    reducers: {
        Increment: (state) => { state.count += 1 },
        Decrement: (state) => { state.count -= 1 },
        Reset: (state) => { state.count = 0 }
    }
})
🏗️ What You Give to createSlice()

Tum createSlice() ko reducers object dete ho:

reducers: {
   Increment: ...,
   Decrement: ...,
   Reset: ...
}

Ye raw functions hain.

🏭 What createSlice() Returns

createSlice() ek object return karta hai:

{
  actions: {...},
  reducer: finalReducerFunction
}

..........................................................................................................

dispatch(CustomIncreser(10)) converts into

dispatch({
  type: "slice1/CustomIncreser",
  payload: 10
})
further written as:

dipatch(action)
..........................................................................................................

FLOW CHART:

┌──────────────────────────────────────────────┐
│ dispatch(CustomIncreser(10))                 │
└──────────────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ 1. Number already = 10                       │
└──────────────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ 2. CustomIncreser(10) is called             │
│    (Action Creator Function)                │
└──────────────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ 3. createSlice already knows:               │
│    name = "slice1"                          │
│    reducer = "CustomIncreser"               │
└──────────────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ 4. Action Creator returns:                  │
│                                            │
│ {                                          │
│   type: "slice1/CustomIncreser",           │
│   payload: 10                              │
│ }                                          │
└──────────────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ 5. dispatch(action)                         │
│    Store ko action object bhejta hai        │
└──────────────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ 6. Redux Store receives action              │
└──────────────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ 7. Store calls reactSlicer.reducer(         │
│      currentState, action )                 │
└──────────────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ 8. reducer checks action.type               │
│    "slice1/CustomIncreser"                  │
└──────────────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ 9. Match found with reducer key:            │
│    CustomIncreser                           │
└──────────────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ 10. Executes this reducer:                  │
│                                            │
│ state.count += action.payload               │
│ state.count += 10                           │
└──────────────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ 11. State changes                           │
│     count: 5 → 15                           │
└──────────────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ 12. Store saves updated state               │
└──────────────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ 13. useSelector detects change              │
│     state.slice1.count                      │
└──────────────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ 14. Component re-renders                    │
└──────────────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│ 15. UI updates                              │
│     Counter is 15                           │
└──────────────────────────────────────────────┘

Action creator (CustomIncreser) pehle action object banata hai, dispatch() us object ko store ko bhejta hai, reducer action.type match karta hai, state update hoti hai, aur UI automatically refresh ho jata hai.