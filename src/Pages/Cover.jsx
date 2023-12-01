import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import kids from '../components/kids.mp4'
import men from '../components/men.mp4'
import women from '../components/women.mp4'
import { Grid, Img } from '@chakra-ui/react';

function Cover() {
  return (
    <Grid>


<Carousel>
                <Grid>
                    <Img src="https://static.zara.net/photos///contents/mkt/spots/aw23-north-woman-new/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-a03148dc-17d3-4cbb-98ba-59237b7229f0-default_0.jpg?ts=1701338880413" />
                    
                </Grid>
                <Grid>
                    <Img src="https://static.zara.net/photos///contents/mkt/spots/aw23-north-woman-dresses/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-62aa6aca-9292-45f7-9a41-0d566002349c-default_0.jpg?ts=1701340105640" />
                    
                </Grid>
                <Grid>
                    <Img src="https://static.zara.net/photos///contents/mkt/spots/aw23-north-woman-tops/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-3b34b431-c5cd-423b-b44f-895d37d56726-default_0.jpg?ts=1701339240205" />
                 
                </Grid>
                <Grid>
                    <Img src='https://static.zara.net/photos///contents/mkt/spots/aw23-north-woman-beauty/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-58ebd829-a488-4cea-8d0d-4bde66416b46-default_0.jpg?ts=1701339675676'/>
                 
                </Grid>
                <Grid>
                    <video width={"100%"} autoPlay loop muted src={women}/>
                 
                </Grid>
            </Carousel>


<Carousel>
                <Grid>
                    <Img src="https://static.zara.net/photos///contents/mkt/spots/aw23-north-kids-babyboy/subhome-xmedia-48//w/1920/IMAGE-landscape-default-fill-4fe964e8-26b8-4639-987d-a3c9f88454cd-default_0.jpg?ts=1701347043437" />
                    
                </Grid>
                <Grid>
                    <Img src="https://static.zara.net/photos///contents/mkt/spots/aw23-north-kids-baby/subhome-xmedia-48//w/1920/IMAGE-landscape-default-fill-7a11050b-2a5e-46bc-95be-e2c483f7c688-default_0.jpg?ts=1701351476152" />
                    
                </Grid>
                <Grid>
                    <Img src="https://static.zara.net/photos///contents/mkt/spots/aw23-north-kids-mini/subhome-xmedia-47//w/1920/IMAGE-landscape-default-fill-2fd23cc6-6a4d-476e-9b07-43e611b5e115-default_0.jpg?ts=1700836781257" />
                 
                </Grid>
                <Grid>
                    <Img src='https://static.zara.net/photos///contents/mkt/spots/aw23-north-kids-shoes-bags/subhome-xmedia-47//w/1920/IMAGE-landscape-default-fill-f9ae78c0-9d2b-4843-b7af-d48f70d69094-default_0.jpg?ts=1700832599419'/>
                 
                </Grid>
                <Grid>
                    <video autoPlay loop muted src={kids}/>
                 
                </Grid>
            </Carousel>

            <Carousel>
                <Grid>
                    <Img src="https://static.zara.net/photos///contents/mkt/spots/aw23-north-man-new/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-994bbea9-7b64-40d4-8e9c-9cb61d91a091-default_0.jpg?ts=1701103591339" />
                    
                </Grid>
                <Grid>
                    <Img src="https://static.zara.net/photos///contents/mkt/spots/aw23-north-man-party/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-6802a9e6-f212-459e-ac6b-29749ea2bacf-default_0.jpg?ts=1701104638109" />
                    
                </Grid>
                <Grid>
                    <Img src="https://static.zara.net/photos///contents/mkt/spots/aw23-north-man-parfums/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-8fd79b37-6e8c-428d-8bb7-8f65b995464c-default_0.jpg?ts=1701106307222" />
                 
                </Grid>
                <Grid>
                    <Img src='https://static.zara.net/photos///contents/mkt/spots/aw23-north-man-joinlife/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-55a6793c-c6da-486c-989e-33ca9ec2cda9-default_0.jpg?ts=1701259993815'/>
                 
                </Grid>
                <Grid>
                    <video autoPlay loop muted src={men}/>
                 
                </Grid>
            </Carousel>
           

            


    </Grid>
  )
}

export default Cover