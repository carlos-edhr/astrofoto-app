"use client";
//@ts-nocheck
import { useTracks } from "@livekit/components-react";
import { Participant, Track } from "livekit-client";
import { useRef, useState, useEffect } from "react";
import { useEventListener } from "usehooks-ts";
import { FullscreenControl } from "./fullscreen-control";
import { VolumeControl } from "./volume-control";
import { toggleFullscreenAll } from "./toggleFullScreenAll";

interface LiveVideoProps {
  participant: Participant;
}

export const LiveVideo = ({ participant }: LiveVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // const requestFullscreen = () => {
  //   if (wrapperRef.current) {
  //     const element = wrapperRef.current;
  //     if (element.requestFullscreen) {
  //       element.requestFullscreen();
  //     } else if (element.mozRequestFullScreen) {
  //       // Firefox
  //       element.mozRequestFullScreen();
  //     } else if (element.webkitRequestFullscreen) {
  //       // Safari
  //       element.webkitRequestFullscreen();
  //     } else if (element.msRequestFullscreen) {
  //       // IE/Edge
  //       element.msRequestFullscreen();
  //     }
  //   }
  // };

  // const exitFullscreen = () => {
  //   if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //   } else if (document.mozCancelFullScreen) {
  //     // Firefox
  //     document.mozCancelFullScreen();
  //   } else if (document.webkitExitFullscreen) {
  //     // Safari
  //     document.webkitExitFullscreen();
  //   } else if (document.msExitFullscreen) {
  //     // IE/Edge
  //     document.msExitFullscreen();
  //   }
  // };

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState(0);

  const onVolumeChange = (value: number) => {
    setVolume(+value);
    if (videoRef?.current) {
      videoRef.current.muted = value === 0;
      videoRef.current.volume = +value * 0.01;
    }
  };

  const toggleMute = () => {
    const isMuted = volume === 0;

    setVolume(isMuted ? 50 : 0);

    if (videoRef?.current) {
      videoRef.current.muted = !isMuted;
      videoRef.current.volume = isMuted ? 0.5 : 0;
    }
  };

  useEffect(() => {
    onVolumeChange(0);
  }, []);

  const toggleFullscreen = () => {
    if (isFullscreen) {
      document.exitFullscreen();
    } else if (wrapperRef?.current) {
      // wrapperRef.current.requestFullscreen();
      // toggleFullscreenAll(wrapperRef.current);

      if (wrapperRef.current.requestFullscreen) {
        wrapperRef.current.requestFullscreen();
        //@ts-ignore
      } else if (wrapperRef.current.mozRequestFullScreen) {
        // Firefox
        //@ts-ignore
        wrapperRef.current.mozRequestFullScreen();
        //@ts-ignore
      } else if (wrapperRef.current.webkitRequestFullscreen) {
        // Safari
        //@ts-ignore
        wrapperRef.current.webkitRequestFullscreen();
        //@ts-ignore
      } else if (wrapperRef.current.msRequestFullscreen) {
        // IE/Edge
        //@ts-ignore
        wrapperRef.current.msRequestFullscreen();
      }
    }
  };

  const handleFullScreenChange = () => {
    const isCurrentlyFullscreen = document.fullscreenElement !== null;
    setIsFullscreen(isCurrentlyFullscreen);
  };

  useEventListener("fullscreenchange", handleFullScreenChange, wrapperRef);

  useTracks([Track.Source.Camera, Track.Source.Microphone])
    .filter((track) => track.participant.identity === participant.identity)
    .forEach((track) => {
      if (videoRef.current) {
        track.publication.track?.attach(videoRef.current);
      }
    });
  return (
    <div ref={wrapperRef} className="relative h-full flex">
      <video ref={videoRef} width="100%" />

      <div className="absolute top-0 h-full w-full opacity-0 hover:opacity-100 hover:transition-all">
        <div className="absolute bottom-0 flex h-14 w-full items-center justify-between bg-gradient-to-r from-neutral-900 px-4">
          <VolumeControl
            onChange={onVolumeChange}
            value={volume}
            onToggle={toggleMute}
          />
          <FullscreenControl
            isFullscreen={isFullscreen}
            onToggle={toggleFullscreen}
          />
        </div>
      </div>
    </div>
  );
};
