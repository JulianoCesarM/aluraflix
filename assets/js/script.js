listaFilmes = [
  "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
  "https://br.web.img3.acsta.net/pictures/210/299/21029996_20130821205722213.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/6/62/How_to_Train_Your_Dragon_%28filme%29_Poster.jpg",
  "https://m.media-amazon.com/images/M/MV5BMjVjZGU5ZTktYTZiNC00N2Q1LThiZjMtMDVmZDljN2I3ZWIwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
  "https://s2-globo-play.glbimg.com/RFsyu9DMDOKXXiCtMDDLpHLbrxo=/362x536/https://s2-globo-play.glbimg.com/BMF3FEBrdfgYhINeUIo4bsen1Yo=/https://s2.glbimg.com/nG3Bh6hAKSSKcF6xLeSUFL8PaBM=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2021/T/R/NEwrt0RkyOGTAmyNmUyQ/1498208-poster.jpg",
]

for (let index = 0; index < listaFilmes.length; index++) {
  const element = listaFilmes[index]
  document.write("<img src=" + element + ">")
}
