function app(){
    app.get('/pets', function(req, res) {
    const pets = [
      { name: 'Cooper', weight: '50', favorite_treat: "apples" },
      { name: 'Bella', weight: '48.3', favorite_treat: "banana"},
      { name: 'Lucy', weight: '30.6', favorite_treat: "peanut butter" }
    ]
    res.json({
      pets
    })
  })
}
export default app;
