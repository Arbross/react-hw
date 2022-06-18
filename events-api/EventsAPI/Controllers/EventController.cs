using EventsAPI.Data;
using EventsAPI.Entities;
using EventsAPI.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EventsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly DatabaseContext _context;
        private readonly IFileStorageService _storageService;
        private readonly string _ContainerName = "events";
        public EventController(DatabaseContext context, IFileStorageService storageService)
        {
            _context = context;
            _storageService = storageService;
        }

        [HttpGet]
        public async Task<List<Event>> Get()
        {
            return await _context.Event.AsNoTracking().ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<Event> Get(Guid id)
        {
            return await _context.Event.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
        }

        [HttpPost]
        public async Task Post([FromForm] CreateEventDTO obj)
        {
            if (obj == null)
            {
                throw new NullReferenceException();
            }

            string url = null;
            if (obj.Image != null)
            {
                url = await _storageService.UploadFile(_ContainerName, obj.Image);
            }

            await _context.Event.AddAsync(new Event()
            {
                Image = url,
                Address = obj.Address,
                Description = obj.Description,
                IsOnline = obj.IsOnline,
                Name = obj.Name,
                Tags = obj.Tags
            });
            await _context.SaveChangesAsync();
        }

        [HttpPut]
        public async Task Put([FromBody] CreateEventDTO obj)
        {
            if (obj == null)
            {
                throw new NullReferenceException();
            }

            Event _obj = await _context.Event.FirstOrDefaultAsync(x => x.Id == obj.Id);
            if (_obj == null)
            {
                throw new InvalidDataException();
            }

            string url = null;
            if (obj.Image != null)
            {
                url = await _storageService.EditFile(_ContainerName, _obj.Image, obj.Image);
            }

            _context.Event.Update(new Event()
            {
                Image = url,
                Address = obj.Address,
                Description = obj.Description,
                IsOnline = obj.IsOnline,
                Name = obj.Name,
                Tags = obj.Tags,
                Id = obj.Id
            });
            await _context.SaveChangesAsync();
        }

        [HttpDelete("{id}")]
        public async Task Delete(Guid id)
        {
            Event obj = await _context.Event.FirstOrDefaultAsync(x => x.Id == id);

            if (obj == null)
            {
                throw new NullReferenceException();
            }

            await _storageService.DeleteFile(_ContainerName, obj.Image);
            _context.Event.Remove(obj);
            await _context.SaveChangesAsync();
        }
    }
}
