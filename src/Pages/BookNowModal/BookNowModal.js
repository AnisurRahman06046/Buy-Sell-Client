import React from "react";

const BookNowModal = ({ bookProduct }) => {
  const { name, resalePrice, id } = bookProduct;
  console.log(bookProduct);
  const handleModal = (event) => {
    event.preventDefault();
    const form = event.target;
    const Username = form.name.value;
    const email = form.email.value;
    const name = form.name.value;
    const resalePrice = form.resalePrice.value;
    const Phone = form.Phone.value;
    const meetingLocation = form.MeetingLocation.value;
    const modalInfo = {
      id: id,
      userName: Username,
      email: email,
      name: name,
      resalePrice: resalePrice,
      Phone: Phone,
      meetingLocation: meetingLocation,
    };
    console.log(modalInfo);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleModal}
            className="grid grid-cols-1 gap-3 text-black p-5"
          >
            <input
              type="text"
              name="Username"
              placeholder="User Name"
              className="input w-full bg-white "
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input w-full bg-white "
            />
            <input
              type="text"
              name="name"
              value={name}
              disabled
              placeholder="Item Name"
              className="input w-full bg-blue-100"
            />
            <input
              type="text"
              name="resalePrice"
              value={resalePrice}
              disabled
              placeholder="Price"
              className="input w-full bg-white"
            />
            <input
              type="text"
              name="Phone"
              placeholder="Phone"
              className="input w-full bg-white"
            />
            <input
              type="text"
              name="MeetingLocation"
              placeholder="Meeting Location"
              className="input w-full bg-white"
            />
            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNowModal;
