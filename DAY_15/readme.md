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