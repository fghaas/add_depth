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

1m/s lateral motion = 1mm/ms

4 frames = 80 mm lateral motion

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

10m/s lateral motion = 10mm/ms

1 frames = 200 mm lateral motion

5 frames = 1 m lateral motion

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


## Raw drone footage 

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
pointed directly sideways. And this means that every 2.7 frames the
camera is laterally displaced one metre, which is a nice
hyperstereoscopic distance to work with for this panoramic shot.


## Open in Shotcut
<https://shotcut.org/>

<!-- Note -->
So I open this in my favourite video editor, which happens to be
Shotcut. Now one thing I'll have to consider here is that for a still
stereogram, I have a great degree of flexibility as to the aspect
ratio. I can, for example, make an 8:3 stereogram from two 4:3 images,
and then put them into a landscape photobook. Or I can make a
stereogram that has a completely arbitrary aspect ratio, and then I
use a mat and a frame of my choosing to hang it. But for a
stereoscopic video, I'm usually locked to the standard 16:9 screen
size.


## Crop to 8:9 aspect ratio
Duplicate stream so two copies can fit into 16:9,  
side by side

<!-- Note -->
So that means what I'll normally do is select an 8:9 crop of the
original video, and work with that. And in a linear-flight or
orbital-flight sequence that's not a problem because by definition the
drone flies through the breadth of the image anyway.

So here we go, first I crop my video to an 8:9 aspect ratio. Next I'll
take one copy of the original stream and align it to the right edge of
the video frame. Then I'll take the exact same cropped copy, and
insert it again, this time to the left edge of the video frame.

And now it's decision time again: do we want to make a *wall-eyed*,
or a *cross-eyed* video? Because that determines what offset we'll
use for the right-hand copy of the clip.


## Offset one stream
Use exactly the offset calculated from your known lateral velocity 

<!-- Note -->
Remember, we're flying to the right, so if we're making a cross-eyed
clip we want the left-eye view to run behind by a jiffy. That's
because the left eye is where the right eye *was* a fraction of a
second ago. So in that case, we'd offset the right clip to run 90
milliseconds *earlier* than the left-eye view.


## Clip video and render

<!-- Note -->
So that's what I'm doing here. And when I'm done with that, of course
this means that the whole video now needs to be cut so that I actually
have footage to show throughout -- both on the left and the right. And
that's easily done by splitting the whole clip at the playhead here
and here, and then discarding the bits that I no longer need.

And now I can render the whole thing, and my results will be a
wall-eyed stereo clip of the sequence.

And for a cross-eyed clip we still want the left **eye** view to run
behind by a little, it's just that the left-eye view is now on the
*right*, which means we now need to offset the clip on the right to
run 90 milliseconds (or FIXME frames) *later* than the right-eye
view (which is is now on the left).

Other than that, it's exactly the same procedure. Crop, offset, cut,
render.

And that's how you get 3D footage of flying along a Brazilian beach
with a view of the jungle, with just a single camera!
