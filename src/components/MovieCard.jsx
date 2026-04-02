import React from "react"

const MovieCard = ({ movie: { title, vote_average,release_date,original_language, poster_path } }) => {
  return (
    <div className="movie-card">
			<img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "/no-movie.png"} alt={title} />
       
			<div className="mt-4">
				<h3 className="text-white">{title}</h3>
				<div className="content">
					<div className="rating">
						<img src="../../public/star.svg" alt="Star Icon" />
						<p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
					</div>

					<span className="text-white">·</span>
					<p className="lang">{original_language}</p>
					<span className="text-white">·</span>
					<p className="year">{release_date}</p>
				</div>
			</div>
    </div>
  )
}

export default MovieCard
