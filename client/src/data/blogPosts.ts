/*
 * Metro Mutts Blog Data
 * SEO-optimized articles about dog care, daycare tips, and Tulsa pet life
 * New posts are added by updating this file
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Dog Care" | "Daycare Tips" | "Health & Safety" | "Tulsa Pet Life" | "Grooming" | "Boarding";
  author: string;
  date: string; // ISO date string
  readTime: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-dog-daycare-helps-working-pet-parents",
    title: "How Dog Daycare Helps Tulsa's Working Pet Parents Stay Guilt-Free",
    excerpt: "Leaving your dog home alone all day while you work doesn't have to be the norm. Here's how daycare solves the guilt \u2014 and keeps your pup thriving.",
    content: `
You love your dog. You also love your job \u2014 or at least need it. And somewhere between the morning commute and the evening return, there's a stretch of 8-10 hours where your dog is home alone, probably staring at the door, wondering when you're coming back.

If that mental image makes you cringe, you're not alone. The guilt of leaving a dog home all day is one of the most common concerns we hear from pet parents in Tulsa. The good news? It doesn't have to be that way.

## The Problem with Long Days Alone

Dogs are social animals. They weren't designed to spend most of their waking hours in an empty house. When they do, a few things tend to happen:

**Destructive behavior.** Chewed shoes, scratched doors, shredded pillows \u2014 these aren't signs of a "bad dog." They're signs of a bored, understimulated dog looking for something to do.

**Excess energy.** A dog that's been lying around all day has a full tank of energy when you walk through the door. That means jumping, barking, pulling on the leash during the evening walk, and generally being a handful when you're already exhausted.

**Separation anxiety.** Some dogs develop genuine anxiety about being left alone. This can manifest as excessive barking, pacing, drooling, or even self-harm. Once separation anxiety sets in, it's difficult to reverse without professional help.

**Weight gain.** Just like humans, dogs who don't move enough gain weight. And just like humans, that extra weight leads to joint problems, heart issues, and a shorter lifespan.

## How Daycare Changes the Equation

Enrolling your dog in daycare even two or three days a week can transform their quality of life \u2014 and yours.

**Physical exercise.** At Metro Mutts, dogs spend their day running, playing, and moving on our indoor and outdoor turf areas. By the time you pick them up, they've had the equivalent of several long walks worth of exercise. You'll notice the difference immediately \u2014 a calm, satisfied dog who's ready to relax with you on the couch.

**Mental stimulation.** Navigating a social group of dogs requires constant mental engagement. Reading body language, negotiating play styles, figuring out group dynamics \u2014 it's a full brain workout. A mentally tired dog is a well-behaved dog.

**Consistent socialization.** Regular exposure to other dogs and people keeps your dog's social skills sharp. Dogs who attend daycare regularly tend to be calmer at the vet, more relaxed at the dog park, and better behaved around guests in your home.

**Routine and structure.** Dogs thrive on routine. Knowing that certain days mean daycare \u2014 with its predictable schedule of play, rest, and snacks \u2014 gives your dog something to look forward to and reduces anxiety about being left.

## The Tulsa Factor

Tulsa's weather makes daycare especially valuable. Our summers regularly hit 100\u00b0F+, making outdoor exercise dangerous for dogs during peak hours. And our winters can swing from 60\u00b0F to ice storms within the same week. A climate-controlled indoor facility means your dog gets consistent exercise regardless of what Oklahoma's weather decides to do.

Plus, Tulsa's growing pet community means more dogs in neighborhoods, more encounters on walks, and more situations where good socialization matters. A well-socialized daycare dog handles all of it with confidence.

## What About the Cost?

We get it \u2014 daycare is an added expense. But consider what you're saving: replacement costs for destroyed furniture and shoes, potential vet bills from obesity-related health issues, and the cost of a dog trainer or behaviorist to address problems that develop from isolation and boredom.

At Metro Mutts, a single day of daycare starts at $29, and multi-day packages bring the per-day cost down significantly. Many of our regulars find that 2-3 days per week hits the sweet spot \u2014 enough to keep their dog happy and exercised without breaking the budget.

## The Guilt-Free Workday

Here's what your day looks like with daycare in the mix: You drop your dog off on the way to work. They spend the day playing with friends, supervised by our staff, burning energy on the turf. You pick them up on the way home. They're tired, happy, and ready to curl up next to you. No guilt. No destroyed house. No anxious dog. Just a good life for both of you.

Your first day at Metro Mutts is free. Come see what a difference it makes.
    `.trim(),
    category: "Dog Care",
    author: "Metro Mutts Team",
    date: "2026-04-02",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800&q=80",
    tags: ["daycare", "working parents", "tulsa", "separation anxiety", "exercise", "socialization"],
  },
  {
    slug: "how-to-prepare-your-dog-for-daycare",
    title: "How to Prepare Your Dog for Their First Day at Daycare",
    excerpt: "Starting daycare can be a big transition for your pup. Here's everything you need to know to make their first day a tail-wagging success.",
    content: `
Starting daycare is one of the biggest transitions your dog will go through — right up there with their first car ride or meeting the family cat. But with a little preparation, you can set your pup up for a smooth, stress-free first day.

## Start with Socialization

If your dog hasn't spent much time around other dogs, start small. Visit a dog park during off-peak hours, arrange playdates with friends' dogs, or take them to pet-friendly stores. The goal is to build their confidence around new dogs and people before they walk through our doors.

## Get Their Vaccines Up to Date

Before your pup can join the pack, they'll need current vaccinations: Rabies, DHPP/Distemper, and Bordetella (within the last 6 months). We also recommend the Canine Influenza vaccine. Your vet can get everything squared away in a single visit.

## Practice Short Separations

If your dog gets anxious when you leave, practice short separations at home. Leave them in a room with a treat-stuffed toy for 10-15 minutes, then gradually increase the time. This builds their confidence that you'll always come back.

## Visit Us First

We offer free meet & greets for every new dog. This gives your pup a chance to sniff around, meet our staff, and get comfortable with the environment before their first full day. It's also a great opportunity for you to ask questions and see our facility up close.

## What to Bring (and What to Leave at Home)

Keep it simple — just bring your dog on a leash. We provide everything else: water, toys, and plenty of attention. Leave food, treats, and favorite toys at home (they can cause resource guarding in group settings).

## The First Day

On day one, keep your goodbye short and sweet. A long, emotional farewell can actually increase your dog's anxiety. Drop them off with a confident "see you later!" and trust that our team has it handled. We'll send you updates throughout the day.

## Signs of a Great First Day

When you pick up your pup, look for these positive signs: a tired but happy dog, a wagging tail when they see you, and willingness to come back. Some dogs may be extra tired or thirsty — that's completely normal after a day of play.

At Metro Mutts, we've helped hundreds of Tulsa dogs transition into daycare. Our experienced staff knows how to make every pup feel safe, welcome, and ready to play. Book your free meet & greet today and let's get started!
    `.trim(),
    category: "Daycare Tips",
    author: "Metro Mutts Team",
    date: "2026-03-28",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
    tags: ["daycare", "first day", "preparation", "socialization", "tulsa"],
  },
  {
    slug: "summer-heat-safety-tips-for-dogs-in-tulsa",
    title: "Summer Heat Safety: Keeping Your Dog Cool in Tulsa's Heat",
    excerpt: "Oklahoma summers are brutal. Learn how to keep your dog safe and comfortable when temperatures soar past 100°F.",
    content: `
Tulsa summers don't mess around. When temperatures climb past 100°F and the humidity makes it feel even hotter, our dogs need extra care to stay safe and comfortable. Here's your complete guide to keeping your pup cool this summer.

## Know the Warning Signs of Heatstroke

Heatstroke can happen fast and can be fatal. Watch for these signs: excessive panting, drooling, bright red gums, vomiting, diarrhea, wobbling, or collapse. If you see any of these, move your dog to a cool area immediately, apply cool (not cold) water to their body, and get to a vet ASAP.

## The Pavement Test

Before every walk, place the back of your hand on the pavement for 5 seconds. If it's too hot for your hand, it's too hot for your dog's paws. Asphalt can reach 150°F on a 95°F day — hot enough to cause serious burns. Stick to grass, use dog booties, or walk during cooler hours.

## Adjust Your Walk Schedule

During peak summer, shift your walks to early morning (before 8 AM) or evening (after 7 PM). These are the coolest parts of the day and the safest times for outdoor exercise. Keep walks shorter than usual and bring water for both of you.

## Hydration is Everything

Always have fresh, cool water available. Add ice cubes to their bowl, bring a portable water bottle on walks, and consider a dog-safe frozen treat (like frozen peanut butter in a Kong) to help them cool down from the inside out.

## Why Indoor Daycare is a Summer Game-Changer

This is where facilities like Metro Mutts really shine. Our indoor play areas are fully climate-controlled, so your dog gets all the exercise and socialization they need without the heat risk. It's the safest way to keep an active dog happy during Oklahoma's hottest months.

## Never Leave Your Dog in a Car

This should go without saying, but it bears repeating: never leave your dog in a parked car, even for "just a minute." On a 90°F day, the inside of a car can reach 120°F in just 10 minutes. Cracking the windows doesn't help enough. If you see a dog in a hot car, call 911.

## Create a Cool Zone at Home

Set up a cool retreat for your dog: a tile floor near a vent, a cooling mat, or a kiddie pool in the shade. Some dogs love having a fan pointed at their resting spot. Make sure they always have access to shade and water when outside.

## Breeds at Higher Risk

Brachycephalic breeds (bulldogs, pugs, Boston terriers, Shih Tzus) are especially vulnerable to heat because their shortened airways make it harder to cool down through panting. Senior dogs, puppies, and overweight dogs are also at higher risk. These pups need extra precautions.

Stay safe this summer, Tulsa. Your dog is counting on you to make smart choices when the heat is on. And remember — our air-conditioned facility is always here when you need a cool place for your pup to play!
    `.trim(),
    category: "Health & Safety",
    author: "Metro Mutts Team",
    date: "2026-03-30",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&q=80",
    tags: ["summer", "heat safety", "tulsa", "hydration", "heatstroke"],
  },
  {
    slug: "benefits-of-regular-dog-grooming",
    title: "Beyond the Bath: Why Regular Grooming is Essential for Your Dog's Health",
    excerpt: "Grooming isn't just about looking good — it's a critical part of your dog's health routine. Here's what every dog owner should know.",
    content: `
Most dog owners think of grooming as a luxury — a nice bath and a cute haircut. But regular grooming is actually one of the most important things you can do for your dog's health. Here's why it matters more than you think.

## Skin and Coat Health

Regular brushing removes dead hair, distributes natural oils, and prevents matting. Mats aren't just ugly — they pull on the skin, trap moisture, and can lead to painful skin infections. For long-haired breeds, daily brushing is ideal. Short-haired breeds benefit from weekly sessions.

## Early Detection of Health Issues

Groomers are often the first to spot lumps, bumps, skin irritations, ear infections, dental problems, and parasites. At Metro Mutts, our groomers check your dog's entire body during every session. We've caught everything from embedded ticks to early-stage tumors that owners hadn't noticed.

## Nail Health

Overgrown nails cause more problems than most people realize. They can alter your dog's gait, cause joint pain, and even curl into the paw pad. If you can hear your dog's nails clicking on the floor, they're too long. Regular trimming (every 2-4 weeks) keeps them at a healthy length.

## Ear Care

Dogs with floppy ears (like Cocker Spaniels and Basset Hounds) are especially prone to ear infections because moisture gets trapped inside. Regular ear cleaning removes buildup and allows air circulation. Our groomers include ear cleaning with every full groom.

## Dental Hygiene

Dental disease affects over 80% of dogs by age three. While professional dental cleanings require a vet, regular teeth brushing between visits makes a huge difference. We offer teeth brushing as an add-on service — it's a quick way to keep your pup's mouth healthy between vet visits.

## Anal Gland Expression

If your dog is scooting across the floor or licking their rear excessively, their anal glands may need expressing. This is a normal maintenance task that many dogs need regularly. Our groomers handle it safely and hygienically as part of our grooming services.

## How Often Should You Groom?

It depends on the breed, coat type, and lifestyle:
- **Long-haired breeds** (Poodles, Shih Tzus, Yorkies): Every 4-6 weeks
- **Medium-coated breeds** (Golden Retrievers, Australian Shepherds): Every 6-8 weeks
- **Short-haired breeds** (Labs, Beagles, Boxers): Every 8-12 weeks
- **All dogs**: Nail trims every 2-4 weeks, ear checks monthly

## The Metro Mutts Difference

Our grooming team combines professional skill with genuine love for dogs. We use premium, dog-safe products, take our time with every pup, and never rush a groom. Plus, since we're also a daycare facility, your dog can play with friends before or after their appointment. It's a spa day and a play day rolled into one.

Book your dog's next grooming appointment and see the difference regular professional care makes!
    `.trim(),
    category: "Grooming",
    author: "Metro Mutts Team",
    date: "2026-03-31",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&q=80",
    tags: ["grooming", "health", "coat care", "nails", "dental"],
  },
  {
    slug: "signs-your-dog-needs-more-socialization",
    title: "5 Signs Your Dog Needs More Socialization (and How Daycare Helps)",
    excerpt: "Is your dog reactive on walks or anxious around other dogs? These could be signs they need more socialization. Here's what to look for.",
    content: `
Socialization isn't just for puppies. Dogs of all ages benefit from regular, positive interactions with other dogs and people. But how do you know if your dog isn't getting enough? Here are five telltale signs — and how structured daycare can help.

## 1. Reactivity on Walks

Does your dog bark, lunge, or pull toward every dog they see on a walk? This is often a sign of frustration from lack of socialization, not aggression. Dogs who don't regularly interact with other dogs can become over-aroused when they finally encounter one.

**How daycare helps:** Regular exposure to other dogs in a controlled environment teaches your dog that other dogs are normal — not something to get worked up about.

## 2. Excessive Barking at Home

Dogs who bark at every sound, every person walking by, or every dog they see through the window may be under-stimulated and under-socialized. They're reacting to novelty because everything feels unfamiliar and potentially threatening.

**How daycare helps:** A day of play provides mental and physical stimulation that reduces boredom-based barking. Dogs who attend daycare regularly are often calmer and quieter at home.

## 3. Anxiety When Left Alone

Separation anxiety can be worsened by a lack of socialization. Dogs who only interact with their owner may become overly dependent, leading to destructive behavior, excessive barking, or house-soiling when left alone.

**How daycare helps:** Daycare teaches your dog that they can have positive experiences without you present. Over time, this builds independence and reduces separation anxiety.

## 4. Fearfulness Around New People or Dogs

If your dog cowers, hides, or trembles when meeting new people or dogs, they likely haven't had enough positive social experiences. Fear-based behavior can escalate into defensive aggression if not addressed.

**How daycare helps:** Our staff introduces new dogs gradually, starting with smaller groups and building up. This controlled approach helps fearful dogs build confidence at their own pace.

## 5. Rough or Inappropriate Play

Dogs who haven't learned proper play etiquette may play too rough, not read other dogs' signals, or become bullies. This usually means they missed key socialization windows or haven't had enough practice.

**How daycare helps:** In a supervised group setting, dogs learn bite inhibition, body language reading, and appropriate play styles from each other. Our staff monitors every interaction and redirects inappropriate behavior.

## The Daycare Advantage

Structured daycare isn't just "dog babysitting." It's a carefully managed social environment where dogs learn crucial life skills. At Metro Mutts, our play groups are organized by size and temperament, every interaction is supervised, and our staff is trained to recognize and manage social dynamics.

If you're seeing any of these signs in your dog, a few days of daycare per week can make a remarkable difference. Book a free meet & greet and let's see if Metro Mutts is the right fit for your pup.
    `.trim(),
    category: "Dog Care",
    author: "Metro Mutts Team",
    date: "2026-04-01",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80",
    tags: ["socialization", "behavior", "daycare", "anxiety", "reactivity"],
  },
  {
    slug: "what-to-look-for-in-a-dog-boarding-facility",
    title: "What to Look for When Choosing a Dog Boarding Facility in Tulsa",
    excerpt: "Not all boarding facilities are created equal. Here's a checklist of what to look for to ensure your dog is safe and happy while you're away.",
    content: `
Leaving your dog at a boarding facility can feel stressful — especially if it's your first time. You want to know they'll be safe, comfortable, and maybe even have a little fun while you're gone. Here's what to look for when evaluating boarding options in Tulsa.

## Cleanliness and Smell

This is the first thing you should notice. A well-run facility should smell clean — not like bleach covering up odors, but genuinely clean. Floors should be free of waste, water bowls should be fresh, and bedding should be laundered regularly. If a facility won't let you tour, that's a red flag.

## Staff-to-Dog Ratio

Ask how many dogs each staff member supervises. A good ratio for group play is 1 staff member per 10-15 dogs. During overnight hours, ask if staff is on-site 24/7 or just checking in periodically. At Metro Mutts, we maintain attentive ratios during play hours and monitor dogs throughout the night.

## Vaccination Requirements

Any reputable facility will require proof of current vaccinations (Rabies, DHPP, Bordetella at minimum). If a facility doesn't ask for vaccine records, walk away. This requirement protects every dog in the building, including yours.

## Play Groups and Socialization

Find out how dogs are grouped during play time. The best facilities separate dogs by size, temperament, and energy level — not just throw everyone together. Ask about their introduction process for new dogs and how they handle conflicts.

## Emergency Protocols

What happens if your dog gets sick or injured? A good facility should have a relationship with a local emergency vet, a clear protocol for contacting you, and staff trained in basic pet first aid. Ask these questions upfront.

## Indoor and Outdoor Spaces

Tulsa's weather can be extreme — scorching summers and icy winters. A quality facility should have climate-controlled indoor play areas so dogs can exercise regardless of weather. Outdoor spaces should be securely fenced with shade and water available.

## Camera Monitoring

While not every facility offers live webcam access to owners, internal camera systems are important for safety. Staff should be able to monitor all play areas and sleeping quarters. At Metro Mutts, we have full camera coverage throughout our facility for safety monitoring.

## Feeding and Medication

If your dog has a special diet or takes medication, make sure the facility can accommodate that. Ask how they handle feeding schedules, food storage, and medication administration. A good facility will have a clear system for tracking each dog's needs.

## Reviews and Reputation

Check Google reviews, Facebook reviews, and ask for references. Look for consistent themes in reviews — both positive and negative. A few negative reviews are normal, but patterns of complaints about cleanliness, safety, or communication are warning signs.

## Trust Your Gut

After touring a facility and talking to staff, trust your instincts. Do the dogs look happy? Is the staff genuinely engaged with the animals? Do you feel comfortable leaving your dog there? Your gut feeling matters.

## The Metro Mutts Standard

We built Metro Mutts to be the boarding facility we'd want for our own dogs. Climate-controlled indoor play areas, attentive staff ratios, strict vaccination requirements, full camera coverage, and a genuine love for every dog that walks through our doors. Come see for yourself — we'd love to show you around.
    `.trim(),
    category: "Boarding",
    author: "Metro Mutts Team",
    date: "2026-03-25",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
    tags: ["boarding", "choosing facility", "tulsa", "safety", "checklist"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function getRecentPosts(count: number): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map((p) => p.category)));
}
