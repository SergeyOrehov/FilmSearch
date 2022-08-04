import { IMoviesImage } from "./IMoviesImage";
import { IMoviesNetwork } from "./IMoviesNetwork";
import { IMoviesRaiting } from "./IMoviesRaiting";

export interface IMoviesDetails {
    image : IMoviesImage;
    name : string;
    premiered : string;
    network : IMoviesNetwork;
    genres : string [];
    id : string;
    summary : string;
    rating : IMoviesRaiting;
}

