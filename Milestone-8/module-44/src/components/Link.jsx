import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <div>
      <li className="px-2 py-1 rounded-lg bg-slate-200 text-black my-2">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
