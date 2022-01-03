# Stereograms with the GIMP
A few easy steps toward 3D images

<!-- Note -->
All right, now. We've got two images, how do we turn them into a
stereogram?

We can do this in a few simple steps, using exclusively free and open
source software. And I'll show you how. 

Enter the GIMP.


<!-- .slide: data-background-iframe="https://www.youtube.com/embed/mU-D7g7-oPI?enablejsapi=1&modestbranding=1&rel=0&loop=1&playlist=mU-D7g7-oPI" data-autoplay data-timing="180" -->
## GIMP editing demo <!-- .element class="hidden" -->

<!-- Note -->
Here, I'm opening the first of my images in the GNU Image Manipulation
Program, and I'll swiftly add my second image, using GIMP's *Open as
Layers* option. What that gives me is an image that consists of two
layers, which I'll rename to be more self-explanatory.

I'll name the layer that corresponds to the first image I opened -- --
as *Left*, because it corresponds to my left-eye image. And
conversely, the second image's layer shall be named *Right*.

So, the first thing I need to do is align these two images on my
selected centre of attention, which as you'll recall is the little
garden ornament.  So what I'm doing first is I'm reducing my *right
eye* layer's opacity to 50% so that it becomes semitransparent. And
then I'll use the *Move* tool, which by default moves the whole layer,
so that the ornament in the *right eye* layer, currently in the
foreground, overlaps precisely with the one in the *left eye* layer,
in the background.

And now, I can do a simple rectangle select to select the portion of
the image where I have content in both layers, exactly as they are
positioned now. And then I do *Image → Crop to selection.* This slices
through *all* the layers, and I end up with two perfectly aligned,
identically sized layers that correspond to a right-eye and a left-eye
view.

And *now* comes the big moment where you need to make a decision: do
you want to make a wall-eyed, or a cross-eyed stereogram? Because
you'll now take your *right eye* layer and move it

* either to the right, so the *left eye* and *right eye* layer are in
  their *natural* positions, meaning you get a *wall-eyed stereogram,*
* or to the left, so the *left eye* and *right eye* layers are in
  their *reversed* positions (*right eye* on the left, *left eye* on
  the right) meaning you get a *cross-eyed stereogram.*

What I'll show you here first is the *cross-eyed* approach. 

So I'm using the *Move* tool again to move the layer, but I'm holding
down the *Alt* key as I'm moving the layer with my mouse, which lets
me drag the layer only vertically or horizontally, and horizontally is
obviously what I want. So I move this *right-eye* layer horizontally
to the right. And I'm intentionally leaving a small gap between the
edges of the layers here; I'll explain why in a second.

Now obviously I've dragged my *right eye* layer off the canvas, so to
fix that I do *Image → Fit Canvas to Layers,* and now my canvas has
room for both layers, now side by side.

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


<!-- .slide: data-background-image="https://live.staticflickr.com/65535/51819168044_dc157e807f_k_d.jpg" data-timing="60" data-background-size="contain" -->
## GIMP result <!-- .element class="hidden" -->

<!-- Note -->
And what you'll see on your screen now is the result, which is a
cross-eyed stereogram. I'll leave this up for a few seconds, so you
can give it a try, and you can also feel free to pause the stream here
if you want to take a little extra time.

And that's how we create stereograms spending just a few minutes in
GIMP!
