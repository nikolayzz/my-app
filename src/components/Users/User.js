import UserFields from "./UserFields";

function User(props) {
  const { id, firstName, lastName, email, gender, ipAddress, changeItem } =
    props;

  return (
    <tr>
      <UserFields id={id} text={id} type="id" changeItem={changeItem} />
      <UserFields
        id={id}
        text={firstName}
        type="firstName"
        changeItem={changeItem}
      />
      <UserFields
        id={id}
        text={lastName}
        type="lastName"
        changeItem={changeItem}
      />
      <UserFields id={id} text={email} type="email" changeItem={changeItem} />
      <UserFields id={id} text={gender} type="gender" changeItem={changeItem} />
      <UserFields
        id={id}
        text={ipAddress}
        type="ipAddress"
        changeItem={changeItem}
      />
    </tr>
  );
}

export default User;
