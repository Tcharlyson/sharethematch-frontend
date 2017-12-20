export default (event) => {
  const target = event.target,
    value = target.type ===
      'checkbox' ? target.checked : target.value,
    name = target.name
  this.setState({
    [name]: value
  });
}