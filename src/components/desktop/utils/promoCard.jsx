import * as React from 'react';
import MiniDrawer from '../utils/drawer';
import FeedCard from '../utils/feedCard';
import { Context } from '../context/provider';
import { useNavigate } from "react-router-dom";
import { getPublications } from '../../actions/pubs';
import Storie from '../utils/storieAvatar';
import { useHorizontalScroll } from '../utils/wheelScroll';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from "@mui/material/InputAdornment";
import TextField from '@mui/material/TextField';


export default function HomeScreenDesktop() {
    const [loading, setLoading] = React.useState(true);
    const navigate = useNavigate();
    const scrollRef = useHorizontalScroll();
    const { state, api } = React.useContext(Context);
    const [publications, setPublications] = React.useState([]);

    React.useEffect(() => {
        if (!state.access) {
            navigate("/signin")
        }

        (async () => {
            let data = await getPublications(api);
            if (data.sucess) {
                setPublications(data.result);
                setLoading(false)
            }
        })()
    }, [api, loading, navigate, state.access ]);

    return (
        <div className='homeContainer'>
            <MiniDrawer />
            <div className='switchScreen'>
                {loading
                    ?
                    <>
                        <h1>nada</h1>
                    </>
                    :
                    <>
                        <div ref={scrollRef} style={{
                            display: 'flex', minHeight: '12%', width: '100%', paddingLeft: '2%', overflowX: 'scroll',
                            WebkitScrollbar: {
                                display: 'none',
                            },
                            msOverflowStyle: 'none',
                            scrollbarWidth: 'none',
                        }}>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map((item, index) => {
                                    return (
                                        <Storie key={index} />
                                    )
                                })
                            }
                        </div>
                        {publications.map((pub) => {
                            return (
                                <FeedCard key={pub.id} loading={false} pub={pub} />
                            )
                        })}
                    </>
                }
            </div>
            <div className='stories-layout'>
                <TextField
                    placeholder='Buscar...'
                    size='small'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <span style={{display: 'flex', width: '100%', justifySelf: 'flex-start', marginTop: '5%'}}>Sugerencias</span>
            </div>
        </div>

    );
}