# Motion stereograms
(aka 3D movies)

<!-- Note -->
OK and now, stereoscopic motion picture.

I think it's probably self-evident that everything that I talked about
in still photography that relied on using special lenses, or lens
attachments, also goes for videography: your DSLR, or any other camera
including your phone can do video just as well as stills. So anything
that you can put on there that creates a stereoscopic image will also
create a stereoscopic video.

But, most people today will be interested in using a different kind of
camera for 3D video: namely, a drone camera. Aerial videography can be
absolutely amazing to begin with, and now imagine shooting aerial
video that's stereoscopic.

Now, of course you could design and build your own drone, perhaps
something like a fixed-wing UAV that has a wingspan of two meters and
has a GoPro embedded in each wing, which would result in seriously
hyperstereoscopic images and would give you the impression of being
something like a pteranodon-sized creature soaring over the earth. But
that would come with significant expense, not to mention the fact that
you'd need a veritable airstrip to take off from and land on.


## Single-camera motion stereograms
Making 3D videos with a single camera (without stereoscopic gear)

<!-- Note -->
But there's a way for you to get 3D footage with a *single*
camera. One that's mounted on your drone, or in your car, or on your
bicycle, wherever. Let me swiftly explain the principle.

Obviously, any stereogram consists of a left-eye, and a right-eye
image. And here, in this case, we only have one camera, with only one
lens. Now I'm holding this GoPro up to my right eye, so that's my
right-eye view. Now where's my corresponding left-eye view?

Well once I add some sideways motion, relative to where my lens is
pointed, you'll quickly realize that my left-eye view is simply the
view my right eye had a moment ago.

And we can harness that in video post-production to create a 3D video
from a 2D video that includes constant lateral motion.


## Harnessing sideways motion
How many frames distance between your left eye and right eye?


50 fps = 20ms / frame

1m/s lateral motion = 1mm/ms <!-- .element class="fragment" -->

4 frames = 80 mm lateral motion <!-- .element class="fragment" -->

<!-- Note -->
Consider that our natural stereoscopic distance is just about 70
millimeters. So if we're shooting video at 50 frames per second, every
frame is one-fiftieth of a second, or 20 milliseconds in
duration. Thus, if we're moving perpendicular to the direction of
view, at even 1 meter per second, which is roughly the speed of a
leisurely walk, 1 frame covers about 20 millimeters in sideways
motion. Thus, if we duplicate our stream and then offset one of them
by 4 frames, we've achieved an effective stereoscopic distance of
80mm.


50 fps = 20ms / frame

10m/s lateral motion = 10mm/ms <!-- .element class="fragment" -->

1 frames = 200 mm lateral motion <!-- .element class="fragment" -->

5 frames = 1 m lateral motion <!-- .element class="fragment" -->

<!-- Note -->
If instead we're doing a speed of 10 m/s, which you can totally
achieve on a bicycle or a drone, then even a single-frame offset gives
you a stereoscopic distance of 200mm, which makes the video solidly
hyperstereoscopic. Use a 5-frame offset and you get a nice "giant
eye's view" with a one-metre stereo distance.

And this becomes especially interesting when you're doing either
linear drone flight along a roughly linear feature --- say a coastline
---, or in orbital flight around an object, ideally one where you're
orbiting above the object and your camera is tilted downward. 


<!-- .slide: data-background-iframe="https://www.youtube.com/embed/s_zxsEnbEZI?enablejsapi=1&modestbranding=1&rel=0&loop=1&playlist=s_zxsEnbEZI" data-autoplay -->
## Raw drone footage <!-- .element class="hidden" -->

<!-- Note -->
So, what I have here is a drone flight sequence shot at 30 frames
per second with the camera pointing forwards and the drone flying
sideways, to the right at about 40 km/h or 11.1 m/s. Or put differently, the
drone is flying forwards at 11.1 m/s and the camera is pointed 90
degrees to the left, which is exactly the same thing. Note that the
camera wouldn't have to be pointed at a 90-degree angle to the
heading of flight. We could also be pointing the camera directly
shoreward, and then fly at the beach at a 45-degree angle. What matters is
that we have *some* lateral motion, and that we're able to quantify it
which saves us some guesswork. In this case though, we have the camera
pointed directly sideways. And this means that every 90ms the
camera is laterally displaced one metre, which is a nice
hyperstereoscopic distance to work with for this panoramic shot.


<!-- .slide: data-background-iframe="https://www.youtube.com/embed/4wk5koQh2SI?enablejsapi=1&modestbranding=1&rel=0&loop=1&playlist=4wk5koQh2SI" data-autoplay data-timing="420" -->
## Edit in Shotcut <!-- .element class="hidden" -->

<!-- Note -->
So I open this in my favourite video editor, which happens to be
[Shotcut](https://shotcut.org/). Owed to a UI quirk in Shotcut I
actually need to open this twice, so that's why there's two entries of
the same video in the playlist, don't worry about that right now.

So the first thing I'm doing here is add a video track for the *Left*
eye image. Note that since we're making a cross-view video this image
will actually end up on the right. I'm pulling this clip down into the
track, and then I'll apply two filters:

* The first one is a rectangular crop filter. What I want to do is
  select the middle of the shot, that is half the width of the image,
  but taken not from either side, but from the middle. So my *size* of
  that crop will be 1352 by 1520 (so half of the original width of
  2704), and I'll offset the crop by 676 (that's one-quarter of 2704).
* The second one is a position filter, which moves the cropped frame
  676 pixels to the *right*, so that it ends up aligned with the right
  frame border.

Remember this is a cross-view view in the making, so the image for
the left eye needs to go to the right.

Now we'll add the *Right* video track, with the second playlist entry
(which, again, is the exact same video that we previously used).

* The crop filter now is exactly the same as the one we had before.
* The position filter now moves the cropped frame -676 pixels to the
  *left*, so that it ends up aligned with the left frame border.

And we finally need to fix this odd little black overlap by changing
the *Blend Mode* to *Add*. That's how we get the two images side by
side.

And now comes the little magic trick: we now move one of our clips by
a small offset. 90 milliseconds, to be precise. So we align the
playhead for that, and shift the video on the *Left* track by
just that amount.

And finally we trim the rest of the video, with *Split at Playhead* at
either end, and trimming the overhang. Then we shift everything back
down to the zero mark.

And now I can render the whole thing, and my results will be a
cross-eyed stereo clip of the sequence.


<!-- .slide: data-background-iframe="https://www.youtube.com/embed/ffeLyJHD8C8?enablejsapi=1&modestbranding=1&rel=0&loop=1&playlist=ffeLyJHD8C8" data-autoplay data-timing="120" -->
## Crossview drone footage <!-- .element class="hidden" -->

<!-- Note -->
And that's how you get 3D footage of flying along a Brazilian beach
with a view of the jungle, with just a single camera!
