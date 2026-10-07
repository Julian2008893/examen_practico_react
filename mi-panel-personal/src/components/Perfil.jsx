export default function Perfil({ nombre, programa, ciudad }) {
  return (
    <div className="perfil">
      <p>Nombre = {nombre}</p>
      <p>Programa = {programa}</p>
      <p>Ciudad = {ciudad}</p>
    </div>
  )
}