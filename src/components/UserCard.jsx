const userCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about } = user;
  return (
    <div className="card bg-base-200 w-96 shadow-xl">
      <figure>
        <img
          //   src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          //   alt="Shoes"
          src={photoUrl}
          alt={firstName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">
          {firstName + " " + lastName}
        </h2>
        <p className="flex justify-center">{about}</p>
        <p className="flex justify-center">{age}</p>
        <p className="flex justify-center">{gender}</p>
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary">Ignore</button>

          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default userCard;
