import React from 'react'

function Header() {
  return (
    <div className="navbar  shadow-sm justify-between bg-gray-800 ">
  <a className="btn btn-ghost text-xl hover:bg-blue-600">Todo list</a>
<button className="btn hover:bg-blue-600" onClick={()=>document.getElementById('my_modal_3').showModal()}>click</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-blue-600">✕</button>
    </form>
    <h3 className="font-bold text-lg">Ustoz</h3>
    <p className="py-4">Edit qilishni yahshilab o'rganishim kerak ekan !!!</p>
  </div>
</dialog>
</div>
  )
}

export default Header