using System.ComponentModel.DataAnnotations;

namespace EventsAPI.Entities
{
    public class Event
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Image { get; set; }
        public bool IsOnline { get; set; } = false;
        public string Description { get; set; }
        public string Tags { get; set; }
    }
}
