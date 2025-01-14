export default interface Brand {
  _id: string; // Unique identifier for the document in MongoDB
  brandName: string; // Name of the brand
  offerExtremeSizes: string | null; // Indicates whether extreme sizes are offered
  size: string; // Size category
  amountOfItemsInEachSize: number | null; // Count of items for each size
  url: string; // Associated URL
  nameOfTotal: string | null; // Additional metadata
  modelsDiversityBodyType: string | null; // Diversity in body types
  modelsDiversityEthnicity: string | null; // Diversity in ethnicity
  agenda: string | null; // Agenda or theme
  diffBodiesForTheSameItem: string | null; // Diversity of body representation
}
