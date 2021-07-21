import React from "react";
import { withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import SimilarMoviesComponent from "../components/similarMovies"
import { getMovie } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const MovieDetailsPage = (props) => {
  const { id } = props.match.params;
  const {
    data: movie,
    error,
    isLoading,
    isError,
  } = useQuery(["movie", { id: id }], getMovie);

  //TEST DATA similar movies

  let testData = {
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/g8oxz3nHOnPMoIk9ipbPxo6Ri71.jpg",
            "genre_ids": [
                14,
                12,
                28
            ],
            "id": 27022,
            "title": "The Sorcerer's Apprentice",
            "original_language": "en",
            "original_title": "The Sorcerer's Apprentice",
            "overview": "Balthazar Blake is a master sorcerer in modern-day Manhattan trying to defend the city from his arch-nemesis, Maxim Horvath. Balthazar can't do it alone, so he recruits Dave Stutler, a seemingly average guy who demonstrates hidden potential, as his reluctant protégé. The sorcerer gives his unwilling accomplice a crash course in the art and science of magic, and together, these unlikely partners work to stop the forces of darkness.",
            "popularity": 20.138,
            "poster_path": "/kffWPQfYLkjsoYEBlFpzqVoTfCV.jpg",
            "release_date": "2010-07-13",
            "video": false,
            "vote_average": 6.06,
            "vote_count": 3968
        },
        {
            "adult": false,
            "backdrop_path": "/1I1cFIKnXEdaOfN4597Y91oNXyo.jpg",
            "genre_ids": [
                27
            ],
            "id": 30497,
            "title": "The Texas Chain Saw Massacre",
            "original_language": "en",
            "original_title": "The Texas Chain Saw Massacre",
            "overview": "When Sally hears that her grandfather's grave may have been vandalized, she and her paraplegic brother, Franklin, set out with their friends to investigate. After a detour to their family's old farmhouse, they discover a group of crazed, murderous outcasts living next door. As the group is attacked one by one by the chainsaw-wielding Leatherface, who wears a mask of human skin, the survivors must do everything they can to escape.",
            "popularity": 31.339,
            "poster_path": "/9s8uSm5K1W0vhGPHv2icM6SFib8.jpg",
            "release_date": "1974-10-01",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 1992
        },
        {
            "adult": false,
            "backdrop_path": "/7jKVrSLqPxOynC9z5gel4BNmhui.jpg",
            "genre_ids": [
                10751,
                10770,
                12,
                35,
                18,
                14,
                878
            ],
            "id": 26736,
            "title": "Wizards of Waverly Place: The Movie",
            "original_language": "en",
            "original_title": "Wizards of Waverly Place: The Movie",
            "overview": "Powerful magic cast by Alex spells trouble for the Russo's. The kids must go on an adventure to save their family and their existence.",
            "popularity": 26.991,
            "poster_path": "/reHGWHlF5tHwFQiFmsWHn9gwIpq.jpg",
            "release_date": "2009-08-28",
            "video": false,
            "vote_average": 6.602,
            "vote_count": 1176
        },
        {
            "adult": false,
            "backdrop_path": "/mlvN6Le0T2U1j0XyHGlaOKdU7kC.jpg",
            "genre_ids": [
                27
            ],
            "id": 22130,
            "title": "Zombie Lake",
            "original_language": "fr",
            "original_title": "Le lac des morts vivants",
            "overview": "In a small village, somewhere in France, German soldiers, killed and thrown into the lake by the Resistance during WW II, come back.",
            "popularity": 14.349,
            "poster_path": "/lykTGLeE31EzzzYPpwZopzjy0pN.jpg",
            "release_date": "1981-05-13",
            "video": false,
            "vote_average": 3.263,
            "vote_count": 40
        },
        {
            "adult": false,
            "backdrop_path": "/lRNx04avj1R9uKOR49TNWbzHKY9.jpg",
            "genre_ids": [
                28,
                18,
                53
            ],
            "id": 22164,
            "title": "Blood and Bone",
            "original_language": "en",
            "original_title": "Blood and Bone",
            "overview": "In Los Angeles, an ex-con takes the underground fighting world by storm in his quest to fulfill a promise to a dead friend.",
            "popularity": 23.049,
            "poster_path": "/4XoqjwKhqN3GlGt0fQtcY2OhkZq.jpg",
            "release_date": "2009-02-07",
            "video": false,
            "vote_average": 7.31,
            "vote_count": 480
        },
        {
            "adult": false,
            "backdrop_path": "/cE9u7jAaaSP1XV2hRoVi9bdMXqj.jpg",
            "genre_ids": [
                27,
                53
            ],
            "id": 21407,
            "title": "The Collector",
            "original_language": "en",
            "original_title": "The Collector",
            "overview": "Desperate to repay his debt to his ex-wife, an ex-con plots a heist at his new employer's country home, unaware that a second criminal has also targeted the property, and rigged it with a series of deadly traps.",
            "popularity": 20.373,
            "poster_path": "/e33HSokiAxhj8ptpAr2xAU4jnd8.jpg",
            "release_date": "2009-07-09",
            "video": false,
            "vote_average": 6.513,
            "vote_count": 1016
        },
        {
            "adult": false,
            "backdrop_path": "/7wJom7fFUisQGcifx8y9qSRX3l2.jpg",
            "genre_ids": [
                35,
                18,
                10751,
                14,
                10770
            ],
            "id": 21481,
            "title": "Twitches",
            "original_language": "en",
            "original_title": "Twitches",
            "overview": "Twins separated at birth, Camryn and Alex meet by chance for the first time on their 21st birthday and discover they're witches with the power to save their homeland of Coventry from the evil that threatens it. But when Camryn leaves Alex to face the darkness alone, will Coventry be doomed? Or will the sisters multiply their magic by standing together?",
            "popularity": 23.943,
            "poster_path": "/oQ2wWWefU2flwuPgdIkLGhPq6Tk.jpg",
            "release_date": "2005-10-14",
            "video": false,
            "vote_average": 6.731,
            "vote_count": 381
        },
        {
            "adult": false,
            "backdrop_path": "/75S1XsekIPF7c99g5cby0DeorPz.jpg",
            "genre_ids": [
                28,
                9648,
                53
            ],
            "id": 27576,
            "title": "Salt",
            "original_language": "en",
            "original_title": "Salt",
            "overview": "As a CIA officer, Evelyn Salt swore an oath to duty, honor and country. Her loyalty will be tested when a defector accuses her of being a Russian spy. Salt goes on the run, using all her skills and years of experience as a covert operative to elude capture. Salt's efforts to prove her innocence only serve to cast doubt on her motives, as the hunt to uncover the truth behind her identity continues and the question remains: \"Who is Salt?\"",
            "popularity": 22.374,
            "poster_path": "/ppXyhOe8UCEOrBRSYqE3SkHwrcR.jpg",
            "release_date": "2010-07-21",
            "video": false,
            "vote_average": 6.358,
            "vote_count": 4266
        },
        {
            "adult": false,
            "backdrop_path": "/n07PCzyoELbSB397OBEesvdvnat.jpg",
            "genre_ids": [
                27
            ],
            "id": 25750,
            "title": "Children of the Corn IV: The Gathering",
            "original_language": "en",
            "original_title": "Children of the Corn IV: The Gathering",
            "overview": "Grace Rhodes, who is studying to be a doctor, returns to her hometown as a strange illness is afflicting the local children. The symptoms include a high fever and spasms, but even weirder is what happens the next day: All those with the illness claim they are somebody else -- then they begin murdering the grown-ups. After her sister undergoes the same sinister metamorphosis, Grace comes to believe there is some connection to an evil cult figure who may be returning from the grave.",
            "popularity": 11.307,
            "poster_path": "/tRjeV9AZgCXGTqyvlp7Ui55Yb3l.jpg",
            "release_date": "1996-10-08",
            "video": false,
            "vote_average": 4.6,
            "vote_count": 89
        },
        {
            "adult": false,
            "backdrop_path": "/2351A6j2YJjuKstEyZl9uObpMrm.jpg",
            "genre_ids": [
                28,
                18,
                27,
                878,
                53
            ],
            "id": 25769,
            "title": "Carriers",
            "original_language": "en",
            "original_title": "Carriers",
            "overview": "A deadly virus has spread across the globe. Contagion is everywhere, no one is safe, and no one can be trusted. Four friends race through the back roads of the American West on their way to a secluded utopian beach in the Gulf of Mexico where they could peacefully wait out the pandemic. Their plans take a grim turn when their car breaks down on an isolated road starting a chain of events that will seal their fates.",
            "popularity": 26.395,
            "poster_path": "/jxjnjHtHXgvjdhkwpelE9ZwVMg6.jpg",
            "release_date": "2009-09-04",
            "video": false,
            "vote_average": 5.793,
            "vote_count": 747
        },
        {
            "adult": false,
            "backdrop_path": "/ew0fG39bgaF2HkXcJZ2xITwjJQ8.jpg",
            "genre_ids": [
                27,
                53
            ],
            "id": 42941,
            "title": "30 Days of Night: Dark Days",
            "original_language": "en",
            "original_title": "30 Days of Night: Dark Days",
            "overview": "After surviving the incidents in Barrow, Alaska, Stella Olemaun relocates to Los Angeles, where she intentionally attracts the attention of the local vampire population in order to avenge the death of her husband, Eben.",
            "popularity": 20.271,
            "poster_path": "/bXHaXVGncI2WKUrNRYDyTyj3ymR.jpg",
            "release_date": "2010-10-04",
            "video": false,
            "vote_average": 4.988,
            "vote_count": 341
        },
        {
            "adult": false,
            "backdrop_path": "/xh1Xjiu7Q0ORz3DbJjlwfC2KwVM.jpg",
            "genre_ids": [
                27,
                9648
            ],
            "id": 42968,
            "title": "The Nun",
            "original_language": "es",
            "original_title": "La monja",
            "overview": "Years ago, a cruel and merciless nun turned a boarding school into a living hell for her students until they could no longer bear the abuse, and she mysteriously disappeared. Now the alumnae are being brutally murdered one by one.",
            "popularity": 23.012,
            "poster_path": "/2bDojliSLzGFwxlqQZodJAXHy7H.jpg",
            "release_date": "2005-11-03",
            "video": false,
            "vote_average": 5.488,
            "vote_count": 167
        },
        {
            "adult": false,
            "backdrop_path": "/3cGvyS88UOf3LDUpXf06FpK8crH.jpg",
            "genre_ids": [
                28,
                53,
                80
            ],
            "id": 51608,
            "title": "The Man from Nowhere",
            "original_language": "ko",
            "original_title": "아저씨",
            "overview": "His only friend called him 'the man from nowhere'... Taesik, a former special agent becomes a loner after losing his wife in a miserable accident and lives a bitter life running a pawnshop. He only has a few customers and a friend named Somi, a little girl next door. As Taesik spends more and more time with Somi, he gets attached to her. Then Somi is kidnapped by a gang, and as Taesik tries to save Somi by becoming deeply associated with the gang his mysterious past is revealed...",
            "popularity": 15.646,
            "poster_path": "/9QJ3cPpYgoPfhRnRPxpQUfx790r.jpg",
            "release_date": "2010-08-04",
            "video": false,
            "vote_average": 7.716,
            "vote_count": 873
        },
        {
            "adult": false,
            "backdrop_path": "/hqyjzDRCs1N5gEsh2gklzPdsEFD.jpg",
            "genre_ids": [
                28,
                53,
                12
            ],
            "id": 56292,
            "title": "Mission: Impossible - Ghost Protocol",
            "original_language": "en",
            "original_title": "Mission: Impossible - Ghost Protocol",
            "overview": "Ethan Hunt and his team are racing against time to track down a dangerous terrorist named Hendricks, who has gained access to Russian nuclear launch codes and is planning a strike on the United States. An attempt to stop him ends in an explosion causing severe destruction to the Kremlin and the IMF to be implicated in the bombing, forcing the President to disavow them. No longer being aided by the government, Ethan and his team chase Hendricks around the globe, although they might still be too late to stop a disaster.",
            "popularity": 24.846,
            "poster_path": "/7GCKNRbzcA4rJXAKoE8KS9IDnZP.jpg",
            "release_date": "2011-12-07",
            "video": false,
            "vote_average": 7.024,
            "vote_count": 7771
        },
        {
            "adult": false,
            "backdrop_path": "/m8Mz2QMhGL9v88a4ASjw8YQdvmJ.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 70074,
            "title": "Bullet to the Head",
            "original_language": "en",
            "original_title": "Bullet to the Head",
            "overview": "After watching their respective partners die, a cop and a hitman form an alliance in order to bring down their common enemy.",
            "popularity": 15.932,
            "poster_path": "/w1aFUPWbkaVShZJzFUYX5JZjz6u.jpg",
            "release_date": "2013-01-31",
            "video": false,
            "vote_average": 5.5,
            "vote_count": 931
        },
        {
            "adult": false,
            "backdrop_path": "/28BDy7Zx2jiXJxNSHo4RT71YPSl.jpg",
            "genre_ids": [
                35,
                18
            ],
            "id": 37247,
            "title": "The Graduate",
            "original_language": "en",
            "original_title": "The Graduate",
            "overview": "Benjamin, a recent college graduate very worried about his future, finds himself in a love triangle with an older woman and her daughter.",
            "popularity": 14.094,
            "poster_path": "/qtVvdSsm2hvau6ItLe4gWdFKe2M.jpg",
            "release_date": "1967-12-21",
            "video": false,
            "vote_average": 7.693,
            "vote_count": 2365
        },
        {
            "adult": false,
            "backdrop_path": "/4f0Kj0QwPui5ydu1UavsnvP1m1o.jpg",
            "genre_ids": [
                28,
                878,
                18
            ],
            "id": 39254,
            "title": "Real Steel",
            "original_language": "en",
            "original_title": "Real Steel",
            "overview": "Charlie Kenton is a washed-up fighter who retired from the ring when robots took over the sport. After his robot is trashed, he reluctantly teams up with his estranged son to rebuild and train an unlikely contender.",
            "popularity": 50.438,
            "poster_path": "/4GIeI5K5YdDUkR3mNQBoScpSFEf.jpg",
            "release_date": "2011-09-28",
            "video": false,
            "vote_average": 6.891,
            "vote_count": 6116
        },
        {
            "adult": false,
            "backdrop_path": "/i25Qs826elaSSBrAtJMVO3mfuZB.jpg",
            "genre_ids": [
                16,
                10751
            ],
            "id": 38757,
            "title": "Tangled",
            "original_language": "en",
            "original_title": "Tangled",
            "overview": "When the kingdom's most wanted-and most charming-bandit Flynn Rider hides out in a mysterious tower, he's taken hostage by Rapunzel, a beautiful and feisty tower-bound teen with 70 feet of magical, golden hair. Flynn's curious captor, who's looking for her ticket out of the tower where she's been locked away for years, strikes a deal with the handsome thief and the unlikely duo sets off on an action-packed escapade, complete with a super-cop horse, an over-protective chameleon and a gruff gang of pub thugs.",
            "popularity": 57.587,
            "poster_path": "/ym7Kst6a4uodryxqbGOxmewF235.jpg",
            "release_date": "2010-11-24",
            "video": false,
            "vote_average": 7.578,
            "vote_count": 8677
        },
        {
            "adult": false,
            "backdrop_path": "/mq1TQH9hDQrltit7fyj8k2P1RuF.jpg",
            "genre_ids": [
                27,
                9648,
                80,
                53
            ],
            "id": 38410,
            "title": "The Poughkeepsie Tapes",
            "original_language": "en",
            "original_title": "The Poughkeepsie Tapes",
            "overview": "When hundreds of videotapes showing torture, murder and dismemberment are found in an abandoned house, they reveal a serial killer's decade-long reign of terror and become the most disturbing collection of evidence homicide detectives have ever seen.",
            "popularity": 12.635,
            "poster_path": "/8ppkhu3pO3fnXr05YeE7ryKloVd.jpg",
            "release_date": "2009-01-30",
            "video": false,
            "vote_average": 6.609,
            "vote_count": 334
        },
        {
            "adult": false,
            "backdrop_path": "/s0XaJEApAfgMgKUBy6UfOnNTtwR.jpg",
            "genre_ids": [
                28,
                16,
                878
            ],
            "id": 39101,
            "title": "Dragon Ball Z: The Tree of Might",
            "original_language": "ja",
            "original_title": "ドラゴンボールZ 地球まるごと超決戦",
            "overview": "Goku and friends must stop a band of space pirates from consuming fruit from the Tree of Might before it's destructive powers drain Earth's energy.",
            "popularity": 72.966,
            "poster_path": "/fDX4Dp8IKvjBAaEb5MOJrGkxWX0.jpg",
            "release_date": "1990-06-07",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 364
        }
    ],
    "total_pages": 500,
    "total_results": 10000
}

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <SimilarMoviesComponent itemData={testData.results} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(MovieDetailsPage);
