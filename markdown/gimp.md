# Stereograms with the GIMP
A few easy steps toward 3D images

<!-- Note -->
All right, now. We've got two images, how do we turn them into a
stereogram?

We can do this in a few simple steps, using exclusively free and open
source software. And I'll show you how. 

Enter the GIMP.


<!-- .slide: data-background-video="videos/gimp-with-narration.mp4" data-background-size="contain" -->

<!-- Note -->
## Open images as layers
Name layers according to what side they are

Here, I'm opening the first of my images in the GNU Image Manipulation
Program, and I'll swiftly add my second image, using GIMP's *Open as
Layers* option. What that gives me is an image that consists of two
layers, which I'll rename to be more self-explanatory.

I'll name the layer that corresponds to the first image I opened --
which GIMP defaults to calling *Background* -- as *left eye*, because
it corresponds to my left-eye image. And conversely, the second
image's layer shall be named *right eye*.

## Align layers
Reduce top layer opacity, then move layer to align

So, the first thing I need to do is align these two images on my
selected centre of attention, which as you'll recall is the little ornament
So what I'm doing first is I'm reducing my *right eye*
layer's opacity to 50% so that it becomes semitransparent. And then
I'll use the *Move* tool, which by default moves the whole layer, so
that the church steeple in the *right eye* layer, currently in the
foreground, overlaps precisely with the one in the *left eye* layer,
in the background.

Next, I'll want the images to align perfectly in rotation. In this
case I didn't hold the camera perfectly horizontal in the second shot,
so I need to tweak that a little bit. So what I do is find a straight
line, preferably somewhere near the center of the image, and make sure
that that line is exactly parallel in the left and right eye layers.

In this case, that's easy because the steeple itself has a nice
vertical line, so I make sure that that aligns nicely. For that I can
use *Layer → Transform → Arbitrary rotation.*

Now when I'm done with the rotation tweaks I can perhaps nudge the
layer one more time so that it's perfectly aligned again.

## Crop image
Rectangle select, then crop to selection

And now, I can do a simple rectangle select to select the portion of the
image where I have content in both layers, exactly as they are
positioned and rotated now. And then I do *Image → Crop to selection.*
This slices through *all* the layers, as it's an image-level edit, and
I end up with two perfectly aligned, identically sized layers that
correspond to a right-eye and a left-eye view.

And if I want a specific aspect ratio in my image, I can still tweak
this so that the image is exactly 4 by 3, or 3 by 2, or whatever
aspect ratio I want.

## Move top layer
Create wall-eyed or cross-eyed stereogram

And before I proceed I now reset the opacity of my top layer, the
*right eye* layer, to 100% so that it's fully opaque again.

And *now* comes the big moment where you need to make a decision: do
you want to make a wall-eyed, or a cross-eyed stereogram? Because
you'll now take your *right eye* layer and move it

* either to the right, so the *left eye* and *right eye* layer are in
  their *natural* positions, meaning you get a *wall-eyed stereogram,*
* or to the left, so the *left eye* and *right eye* layers are in
  their *reversed* positions (*right eye* on the left, *left eye* on
  the right) meaning you get a *cross-eyed stereogram.*

What I'll show you here first is the *wall-eyed* approach. 

So I'm using the *Move* tool again to move the layer, but I'm holding
down the *Alt* key as I'm moving the layer with my mouse, which lets
me drag the layer only vertically or horizontally, and horizontally is
obviously what I want. So I move this *right-eye* layer horizontally
to the right. And I'm intentionally leaving a small gap between the
edges of the layers here; I'll explain why in a second.

## Resize canvas
Expand canvas to accommodate both layers

Now obviously I've dragged my *right eye* layer off the canvas, so to
fix that I do *Image → Fit Canvas to Layers,* and now my canvas has
room for both layers, now side by side.

## Add new background layer
Create uniform background for natural framing

And now I'll do one other thing, namely add a new, one-colour layer
that I send into the background. I normally use white here, but you
can use any colour you find pleasing --- and in this special case,
I'll use red because I told you earlier that in this talk, any
wall-eyed image uses red as its colour code.

What this generates is this little bar right in the middle. And I've
found that this makes viewing the image so much easier, because as you
freeview, that one bar in the middle becomes two bars either side of
the image, which frames it very nicely and really helps things click
into place easily. You can of course extend that idea even further and
also add a bar at the top and the bottom of the image, preferably of
identical width as the one in the centre, but in my opinion that's
entirely optional.

So here's my wall-eyed stereogram.

And now, since I told you earlier that I generally prefer cross-eyed
images because I consider them easier to view, here's the same process
for a cross-eyed stereogram, where instead of moving the *right eye*
layer to the right, I'm moving it to the *left:*

* Starting from the aligned and cropped layers -- up to here the
  process is exactly identical as for a wall-eyed image.
* Move the *right eye* layer, with Alt key, this time pushing the
  layer to the *left* of the *left eye* one.
* Fit the canvas to the layers.
* And finally, add a new background layer, this time in blue, because
  I told you I'd colour-code cross-eyed images in blue.

And what you'll see on your screen now is the results of both,
wall-eyed stereogram at the top, cross-eyed at the bottom. I'll leave
these up for a few seconds, so you can give them both a try, and you
can also feel free to pause the stream here if you want to take a
little extra time.

But I hope that one of them will nicely "pop" for you and give you a
really good depth view.

And just for comparison, here's the second version, where I actually
moved a few paces to the side to get my right-eye image. You'll notice
that this one's so pronounced in its depth effect that it's almost a
little unnatural. So, this is sometimes nicknamed a "giant's view"
image because it's somewhat akin to what a Godzilla-sized creature
would see. It can also evoke an effect like looking at a miniature
diorama, which makes this somewhat equivalent to the tilt-shift
technique in regular 2D photography.

And that's how we create stereograms spending just a few minutes in
GIMP!
