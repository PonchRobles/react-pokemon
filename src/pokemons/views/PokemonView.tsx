import { useParams } from "react-router";
import { PokemonDetail } from "../components/PokemonDetail"
import { usePokemon } from "../hooks/usePokemon";

export const PokemonView = () => {
    const params = useParams();
    const { id = '0' } = params;

    const { pokemonQuery } = usePokemon(+id);

    // if ( pokemonQuery.isLoading )
    //   return (<LoadingIcon />)

    // if ( !pokemonQuery.data )
    //   return ( <Navigate to="./issues/list" /> )

    return (
        <div className="row mt-5">
            <PokemonDetail pokemon={pokemonQuery.data} />
        </div>
    )
}
